// src/pages/BoardPage01.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
// import io from 'socket.io-client';
import * as api from '../api';
import toast from 'react-hot-toast';
import Spinner from '../components/layout/Spinner';
import Board from '../components/board/Board';

const BoardPage01 = () => {
    const { id } = useParams();
    // The single source of truth for the board's state
    const [board, setBoard] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [socket, setSocket] = useState(null);

    const fetchBoardData = useCallback(async () => {
        try {
            const { data } = await api.fetchBoardById(id);
            setBoard(data);
        } catch (error) {
            toast.error('Failed to fetch board data.');
        } finally {
            setLoading(false);
        }
    }, [id]);

    /*
    useEffect(() => {
        const newSocket = io('http://localhost:5000');
        setSocket(newSocket);
        newSocket.emit('join-board', id);

        newSocket.on('board-update', () => {
            toast('Board updated!', { icon: '🔄' });
            fetchBoardData();
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

    // Handler for when a new list is created
    const handleListCreated = (newList) => {
        setBoard(prevBoard => ({
            ...prevBoard,
            lists: [...prevBoard.lists, newList],
        }));
    };

    // Handler for when a new card is created
    const handleCardCreated = (newCard, listId) => {
        setBoard(prevBoard => {
            const newLists = prevBoard.lists.map(list => {
                if (list._id === listId) {
                    const updatedCards = list.cards ? [...list.cards, newCard] : [newCard];
                    return { ...list, cards: updatedCards };
                }
                return list;
            });
            return { ...prevBoard, lists: newLists };
        });
    };

    // Handler for the drop event from the native D&D API
    const handleDrop = async (cardId, fromListId, toListId) => {
        // Optimistic UI update
        const sourceCard = board.lists
            .find(list => list._id === fromListId)
            ?.cards.find(card => card._id === cardId);

        if (!sourceCard) return;

        const newBoardState = JSON.parse(JSON.stringify(board));
        const fromList = newBoardState.lists.find(list => list._id === fromListId);
        const toList = newBoardState.lists.find(list => list._id === toListId);

        fromList.cards = fromList.cards.filter(card => card._id !== cardId);
        toList.cards.push(sourceCard);
        setBoard(newBoardState);

        // API call to persist the change
        try {
            await api.moveCard({ cardId, fromListId, toListId, toIndex: toList.cards.length - 1 });
        } catch (error) {
            toast.error('Failed to move card.');
            fetchBoardData(); // Revert UI on failure
        }
    };
    
    if (loading) return <Spinner />;
    if (!board) return <p className="text-center text-red-500">Board not found.</p>;

    return (
        <div className="p-4 md:p-6 h-full">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{board.name}</h1>
            {/* The state and handlers are passed down as props here */}
            <Board 
                board={board} 
                onDrop={handleDrop} 
                onListCreated={handleListCreated}
                onCardCreated={handleCardCreated}
            />
        </div>
    );
};

export default BoardPage01;