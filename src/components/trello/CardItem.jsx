import React from 'react';
import { Paper, Typography } from '@mui/material';

const CardItem = ({ card }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('cardId', card.id);
  };

  return (
    <Paper
      draggable
      onDragStart={handleDragStart}
      sx={{
        p: 1.5,
        cursor: 'grab',
        bgcolor: 'white',
        borderRadius: 1,
        boxShadow: 1
      }}
    >
      <Typography variant="body1">{card.title}</Typography>
    </Paper>
  );
};

export default CardItem;
