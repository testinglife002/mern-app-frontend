import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Divider,
  Button,
  useTheme
} from '@mui/material';
import CardItem from './CardItem';
import AddCardModal from './AddCardModal';

const List = ({ list, onCardDrop, onAddCard }) => {
  const [openAddCard, setOpenAddCard] = useState(false);
  const theme = useTheme();

  const handleDrop = (e) => {
    const draggedCardId = e.dataTransfer.getData('cardId');
    const targetIndex = parseInt(e.currentTarget.dataset.index);
    onCardDrop(list.id, draggedCardId, targetIndex);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        minWidth: 300,
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        bgcolor: theme.palette.grey[100],
        borderRadius: 2
      }}
    >
      <Typography variant="h6" gutterBottom>
        {list.name}
      </Typography>
      <Divider />

      <Box
        sx={{ flexGrow: 1, overflowY: 'auto', mt: 1 }}
        onDragOver={(e) => e.preventDefault()}
      >
        {list.cards.map((card, index) => (
          <div
            key={card.id}
            onDrop={handleDrop}
            data-index={index}
            style={{ marginBottom: 8 }}
          >
            <CardItem card={card} />
          </div>
        ))}
      </Box>

      <Button
        variant="outlined"
        size="small"
        sx={{ mt: 1 }}
        onClick={() => setOpenAddCard(true)}
      >
        + Add Card
      </Button>

      <AddCardModal
        open={openAddCard}
        onClose={() => setOpenAddCard(false)}
        onAdd={(title) => onAddCard(list.id, title)}
      />
    </Paper>
  );
};

export default List;
