// /src/pages/BoardPage.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
// import io from 'socket.io-client';
import * as api from '../api/index.js';
import toast from 'react-hot-toast';
import Spinner from '../components/layout/Spinner';
import Board from '../components/board/Board';
import ActivityFeed from '../components/board/ActivityFeed';

const BoardPage = () => {
    const { id } = useParams();
    const [board, setBoard] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [socket, setSocket] = useState(null);
    const [isActivityFeedOpen, setIsActivityFeedOpen] = useState(false);

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
                    const updatedCards = list.cards ? [...list.cards, newCard] : [newCard];
                    return { ...list, cards: updatedCards };
                }
                return list;
            });
            return { ...prevBoard, lists: newLists };
        });
    };

  /* const handleDrop = async (cardId, fromListId, toListId) => {
        console.log('🟡 Dropping:', { cardId, fromListId, toListId });
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

        try {
            await api.moveCard({ cardId, fromListId, toListId, toIndex: toList.cards.length - 1 });
        } catch (error) {
            toast.error('Failed to move card.');
            fetchBoardData();
        }
    }; */

    const handleDrop = async (cardId, fromListId, toListId, toIndex) => {
        console.log('🟡 Dropping:', { cardId, fromListId, toListId, toIndex });

        const sourceCard = board.lists
            .find(list => list._id === fromListId)
            ?.cards.find(card => card._id === cardId);

        if (!sourceCard) return;

        const newBoardState = JSON.parse(JSON.stringify(board));
        const fromList = newBoardState.lists.find(list => list._id === fromListId);
        const toList = newBoardState.lists.find(list => list._id === toListId);

        // Remove from old list
        fromList.cards = fromList.cards.filter(card => card._id !== cardId);

        // Insert into new list (or same list)
        if (typeof toIndex === 'number') {
            toList.cards.splice(toIndex, 0, sourceCard);
        } else {
            toList.cards.push(sourceCard);
        }

        setBoard(newBoardState);

        try {
            await api.moveCard({ cardId, fromListId, toListId, toIndex });
        } catch (error) {
            toast.error('Failed to move card.');
            fetchBoardData();
        }
    };

    
    if (loading) return <Spinner />;
    if (!board) return <p className="text-center text-red-500">Board not found.</p>;

    return (
        <div className="p-4 md:p-6 h-full">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold text-gray-800">{board.name}</h1>
                <button 
                    onClick={() => setIsActivityFeedOpen(true)}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                >
                    Activity
                </button>
            </div>
            
            <Board 
                board={board} 
                onDrop={handleDrop} 
                onListCreated={handleListCreated}
                onCardCreated={handleCardCreated}
            />

            <ActivityFeed 
                activities={board.activity || []} 
                isOpen={isActivityFeedOpen} 
                onClose={() => setIsActivityFeedOpen(false)}
            />
        </div>
    );
};

export default BoardPage;

