// src/components/board/List.jsx

import React, { useState } from 'react';
import Card from './Card';
import * as api from '../../api/index.js';
import toast from 'react-hot-toast';

const List = ({ list, onDrop, onCardCreated }) => {
    const [isOver, setIsOver] = useState(false);
    const [cardTitle, setCardTitle] = useState('');
    const [isCreatingCard, setIsCreatingCard] = useState(false);

    // Native HTML5 drag event handler
    const handleDragOver = (e) => {
        e.preventDefault(); // This is required to allow dropping
        setIsOver(true);
    };

    const handleDragLeave = () => {
        setIsOver(false);
    };

    // Native HTML5 drop event handler
    const handleDrop = (e) => {
        e.preventDefault();
        // Using the native DataTransfer API to get data
        const cardId = e.dataTransfer.getData('cardId');
        const fromListId = e.dataTransfer.getData('fromListId');
        
        // if (fromListId !== list._id) {
        //    onDrop(cardId, fromListId, list._id);
        // }

        const toListId = list._id;
        const toIndex = list.cards.length; // Default to end
        onDrop(cardId, fromListId, toListId, toIndex);

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
            onCardCreated(data, list._id); // Calling the prop function from the parent
            setCardTitle('');
        } catch (error) {
            toast.error("Failed to create card.");
        } finally {
            setIsCreatingCard(false);
        }
    };

    return (
        <div
            // className="list"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`list flex-shrink-0 w-72 bg-gray-100 rounded-lg shadow-md h-fit transition-colors duration-300 ${isOver ? 'bg-gray-200' : ''}`}
        >
            <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-700">{list.name}</h3>
                <h3 className="list-title">{list.name}</h3>
            </div>
            <div className="p-2 space-y-2 min-h-[50px]">
                {list.cards.map((card, index) => (
                    <Card
                        key={card._id}
                        card={card}
                        index={index}
                        fromListId={list._id}
                    />
                ))}
            </div>
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

export default List;