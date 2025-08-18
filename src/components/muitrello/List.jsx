// components/List.jsx
import React, { useState } from 'react';
import AddCard from './AddCard';
import CardItem from './CardItem';
import './List.css';

const List = ({ list, setLists, lists, addActivity }) => {
  const [cards, setCards] = useState(list.cards);

  const addCard = (text) => {
    const newCard = { id: Date.now(), text };
    const updatedLists = lists.map((l) =>
      l.id === list.id ? { ...l, cards: [...cards, newCard] } : l
    );
    setLists(updatedLists);
    addActivity(`Added card: ${text} to list: ${list.title}`);
  };

  return (
    <div className="list">
      <h3>{list.title}</h3>
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
      <AddCard onAdd={addCard} />
    </div>
  );
};

export default List;