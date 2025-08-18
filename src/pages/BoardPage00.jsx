// /src/pages/BoardPage00.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
// import io from 'socket.io-client';
import * as api from '../api';
import toast from 'react-hot-toast';
import Spinner from '../components/layout/Spinner';
import Board from '../components/board/Board';

const BoardPage00 = () => {
    const { id } = useParams();
    const [board, setBoard] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [socket, setSocket] = useState(null);

    const fetchBoardData = useCallback(async () => {
        try {
            const { data } = await api.fetchBoardById(id);
            // Sort lists and cards if order is stored; otherwise, use default order
            setBoard(data);
        } catch (error) {
            toast.error('Failed to fetch board data.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [id]);

    /*
    useEffect(() => {
        // Establish WebSocket connection
        const newSocket = io('http://localhost:5000');
        setSocket(newSocket);

        // Join the specific board's room
        newSocket.emit('join-board', id);

        // Listen for updates
        newSocket.on('board-update', (data) => {
            if (data.boardId === id) {
                toast.success('Board updated in real-time!');
                fetchBoardData();
            }
        });

        return () => {
            newSocket.emit('leave-board', id);
            newSocket.disconnect();
        };
    }, [id, fetchBoardData]);
    */

    useEffect(() => {
        fetchBoardData();
    }, [id, fetchBoardData]);

    const handleDrop = async (cardId, fromListId, toListId) => {
        // 1. Optimistically update UI
        const sourceCard = board.lists
            .find(list => list._id === fromListId)
            ?.cards.find(card => card._id === cardId);

        if (!sourceCard) return;

        // Create a deep copy to avoid direct state mutation
        const newBoardState = JSON.parse(JSON.stringify(board));
        
        // Find lists
        const fromList = newBoardState.lists.find(list => list._id === fromListId);
        const toList = newBoardState.lists.find(list => list._id === toListId);

        // Remove card from the 'from' list
        fromList.cards = fromList.cards.filter(card => card._id !== cardId);
        
        // Add card to the 'to' list
        toList.cards.push(sourceCard);

        setBoard(newBoardState);

        // 2. Make API call to persist change
        try {
            await api.moveCard({ cardId, fromListId, toListId, toIndex: toList.cards.length - 1 });
            // The success toast will come from the websocket event
        } catch (error) {
            toast.error('Failed to move card.');
            // Revert UI if API call fails
            fetchBoardData(); 
        }
    };
    
    if (loading) return <Spinner />;
    if (!board) return <p className="text-center text-red-500">Board not found.</p>;

    return (
        <div className="p-4 md:p-6 h-full">
            <h1 className="text-3xl font-bold mb-4">{board.name}</h1>
            <Board board={board} onDrop={handleDrop} />
        </div>
    );
};

export default BoardPage00;

