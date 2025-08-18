// /src/components/board/Board00.jsx
import React from 'react';
import List from './List01';
import CreateList from './CreateList';

const Board00 = ({ board, onDrop, onListCreated, onCardCreated }) => {
    return (
        <div className="flex items-start space-x-4 overflow-x-auto p-2 h-[calc(100vh-150px)]">
            {board.lists.map(list => (
                <List 
                    key={list._id} 
                    list={list} 
                    onDrop={onDrop}
                    onCardCreated={onCardCreated} 
                />
            ))}
            <CreateList boardId={board._id} onListCreated={onListCreated} />
        </div>
    );
};

export default Board00;

