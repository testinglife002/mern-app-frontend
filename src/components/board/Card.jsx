// src/components/board/Card.jsx

import React from 'react';

// Card.jsx
const Card = ({ card, fromListId, index }) => {
    // Native HTML5 drag event handler
    const handleDragStart = (e) => {
        // Using the native DataTransfer API to set data
        e.dataTransfer.setData('cardId', card._id);
        e.dataTransfer.setData('fromListId', fromListId);
        e.dataTransfer.setData('cardIndex', index); // Optional for extra logic
        e.dataTransfer.effectAllowed = 'move';
    };

    return (
        // The "draggable" attribute enables native dragging
        <div
            draggable="true"
            onDragStart={handleDragStart}
            className="card bg-white p-3 rounded-md shadow-sm border-l-4 border-indigo-500 cursor-grab active:cursor-grabbing"
        >
            <p className="text-sm text-gray-800">{card.title}</p>
        </div>
    );
};

export default Card;