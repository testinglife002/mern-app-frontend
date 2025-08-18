// components/CardItem.jsx
import React from 'react';
import './CardItem.css';

const CardItem = ({ card }) => {
  return <div className="card-item">📝 {card.text}</div>;
};

export default CardItem;