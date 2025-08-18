// /src/components/board/Card00.jsx
import React from 'react';

const Card00 = ({ card, fromListId }) => {
    const handleDragStart = (e) => {
        // Set the data to be transferred
        e.dataTransfer.setData('cardId', card._id);
        e.dataTransfer.setData('fromListId', fromListId);
        e.dataTransfer.effectAllowed = 'move';
    };

    return (
        <div
            draggable="true"
            onDragStart={handleDragStart}
            className="bg-white p-3 rounded-md shadow-sm border-l-4 border-indigo-500 cursor-grab active:cursor-grabbing"
        >
            <p className="text-sm text-gray-800">{card.title}</p>
        </div>
    );
};

export default Card00;

