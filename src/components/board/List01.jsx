// /src/components/board/List01.jsx
import React, { useState } from 'react';
import Card from './Card00';
import * as api from '../../api';
import toast from 'react-hot-toast';

const List01 = ({ list, onDrop, onCardCreated }) => {
    const [isOver, setIsOver] = useState(false);
    const [cardTitle, setCardTitle] = useState('');
    const [isCreatingCard, setIsCreatingCard] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsOver(true);
    };

    const handleDragLeave = () => {
        setIsOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const cardId = e.dataTransfer.getData('cardId');
        const fromListId = e.dataTransfer.getData('fromListId');
        
        if (fromListId !== list._id) {
            onDrop(cardId, fromListId, list._id);
        }
        setIsOver(false);
    };

    const handleCreateCard = async (e) => {
        e.preventDefault();
        if (!cardTitle.trim()) return;
        
        setIsCreatingCard(true);
        try {
            const cardData = { title: cardTitle, listId: list._id, boardId: list.board };
            const { data } = await api.createCard(cardData);
            toast.success(`Card "${data.title}" created`);
            onCardCreated(data, list._id); // Notify parent
            setCardTitle('');
        } catch (error) {
            toast.error("Failed to create card.");
            console.error(error);
        } finally {
            setIsCreatingCard(false);
        }
    };

    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`flex-shrink-0 w-72 bg-gray-100 rounded-lg shadow-md h-fit transition-colors duration-300 ${isOver ? 'bg-gray-200' : ''}`}
        >
            <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-700">{list.name}</h3>
            </div>
            <div className="p-2 space-y-2 min-h-[50px]">
                {list.cards.map(card => (
                    <Card key={card._id} card={card} fromListId={list._id} />
                ))}
            </div>
            {/* Create Card Form */}
            <div className="p-2">
                <form onSubmit={handleCreateCard}>
                    <input
                        type="text"
                        value={cardTitle}
                        onChange={(e) => setCardTitle(e.target.value)}
                        placeholder="+ Add a card"
                        className="w-full p-2 border-2 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white bg-gray-100 hover:bg-gray-200"
                        disabled={isCreatingCard}
                    />
                </form>
            </div>
        </div>
    );
};

export default List01;

