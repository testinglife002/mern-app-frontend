// components/BoardView.jsx
import React, { useState } from 'react';
import List from './List';
import AddList from './AddList';
import './BoardView.css';

const BoardView = ({ addActivity }) => {
  const [lists, setLists] = useState([]);

  const addNewList = (title) => {
    const newList = { id: Date.now(), title, cards: [] };
    setLists([...lists, newList]);
    addActivity(`Added new list: ${title}`);
  };

  const updateLists = (newLists) => setLists(newLists);

  return (
    <div className="board-view">
      {lists.map((list) => (
        <List key={list.id} list={list} setLists={updateLists} lists={lists} addActivity={addActivity} />
      ))}
      <AddList onAdd={addNewList} />
    </div>
  );
};

export default BoardView;