//  /src/pages/BoardPageAlt.jsx (Updated logic)
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
// import io from 'socket.io-client';
import * as api from '../api';
import toast from 'react-hot-toast';
import Spinner from '../components/layout/Spinner';
import Board from '../components/board/Board';

const BoardPageAlt = () => {
    const { id } = useParams();
    const [board, setBoard] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [socket, setSocket] = useState(null);

    const fetchBoardData = useCallback(async () => {
        try {
            const { data } = await api.fetchBoardById(id);
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
        const newSocket = io('http://localhost:5000');
        setSocket(newSocket);
        newSocket.emit('join-board', id);

        newSocket.on('board-update', (data) => {
            if (data.boardId === id) {
                toast('Board updated!', { icon: '🔄' });
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

    const handleListCreated = (newList) => {
        setBoard(prevBoard => ({
            ...prevBoard,
            lists: [...prevBoard.lists, newList],
        }));
    };

    const handleCardCreated = (newCard, listId) => {
        setBoard(prevBoard => {
            const newLists = prevBoard.lists.map(list => {
                if (list._id === listId) {
                    // Ensure cards array exists
                    const updatedCards = list.cards ? [...list.cards, newCard] : [newCard];
                    return { ...list, cards: updatedCards };
                }
                return list;
            });
            return { ...prevBoard, lists: newLists };
        });
    };

    const handleDrop = async (cardId, fromListId, toListId) => {
        // Optimistically update UI
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

        // API call
        try {
            await api.moveCard({ cardId, fromListId, toListId, toIndex: toList.cards.length - 1 });
            // WebSocket will trigger a fetch for consistency
        } catch (error) {
            toast.error('Failed to move card.');
            fetchBoardData(); // Revert UI
        }
    };
    
    if (loading) return <Spinner />;
    if (!board) return <p className="text-center text-red-500">Board not found.</p>;

    return (
        <div className="p-4 md:p-6 h-full">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{board.name}</h1>
            <Board 
                board={board} 
                onDrop={handleDrop} 
                onListCreated={handleListCreated}
                onCardCreated={handleCardCreated}
            />
        </div>
    );
};

export default BoardPageAlt;


