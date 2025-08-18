// /src/components/board/Board.jsx

import React from 'react';
import List from './List';
import CreateList from './CreateList';

const Board = ({ board, onDrop, onListCreated, onCardCreated }) => {
    return (
        <div className="board">
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
        </div>
    );
};

export default Board;



/*
import React from 'react';
import List from './List';

const Board = ({ board, onDrop }) => {
    return (
        <div className="flex space-x-4 overflow-x-auto p-2 h-[calc(100vh-150px)]">
            {board.lists.map(list => (
                <List key={list._id} list={list} onDrop={onDrop} />
            ))}
          
        </div>
    );
};

export default Board;
*/

