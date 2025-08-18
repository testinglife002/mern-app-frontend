import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import List from './List';
import AddListModal from './AddListModal';

const Board = () => {
  const [lists, setLists] = useState([]);
  const [openAddList, setOpenAddList] = useState(false);

  const handleAddList = (name) => {
    const newList = {
      id: Date.now().toString(),
      name,
      cards: []
    };
    setLists([...lists, newList]);
  };

  const handleCardDrop = (listId, draggedCardId, targetIndex) => {
    const updatedLists = lists.map((list) => {
      if (list.cards.find((card) => card.id === draggedCardId)) {
        list.cards = list.cards.filter((card) => card.id !== draggedCardId);
      }
      return list;
    });

    const draggedCard = lists
      .flatMap((list) => list.cards)
      .find((card) => card.id === draggedCardId);

    const targetList = updatedLists.find((list) => list.id === listId);
    targetList.cards.splice(targetIndex, 0, draggedCard);

    setLists([...updatedLists]);
  };

  const handleAddCard = (listId, title) => {
    const updatedLists = lists.map((list) =>
      list.id === listId
        ? {
            ...list,
            cards: [...list.cards, { id: Date.now().toString(), title }]
          }
        : list
    );
    setLists(updatedLists);
  };

  return (
    <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2, py: 2 }}>
      {lists.map((list) => (
        <List
          key={list.id}
          list={list}
          onCardDrop={handleCardDrop}
          onAddCard={handleAddCard}
        />
      ))}

      <Button variant="contained" onClick={() => setOpenAddList(true)}>
        + Add List
      </Button>

      <AddListModal
        open={openAddList}
        onClose={() => setOpenAddList(false)}
        onAdd={handleAddList}
      />
    </Box>
  );
};

export default Board;
