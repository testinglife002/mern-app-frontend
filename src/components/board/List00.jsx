// /src/components/board/List00.jsx
import React, { useState } from 'react';
import Card from './Card00';

const List00 = ({ list, onDrop }) => {
    const [isOver, setIsOver] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault(); // This is crucial to allow dropping
        setIsOver(true);
    };

    const handleDragLeave = () => {
        setIsOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const cardId = e.dataTransfer.getData('cardId');
        const fromListId = e.dataTransfer.getData('fromListId');
        
        // Prevent dropping in the same list for this simple implementation
        if (fromListId !== list._id) {
            onDrop(cardId, fromListId, list._id);
        }
        setIsOver(false);
    };

    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`flex-shrink-0 w-72 bg-gray-100 rounded-lg shadow-md transition-colors duration-300 ${isOver ? 'bg-gray-200' : ''}`}
        >
            <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-700">{list.name}</h3>
            </div>
            <div className="p-2 space-y-2 min-h-[100px]">
                {list.cards.map(card => (
                    <Card key={card._id} card={card} fromListId={list._id} />
                ))}
            </div>
             {/* Add New Card form would go here */}
        </div>
    );
};

export default List00;

