// components/modals/AddCard.jsx
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const AddCard = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <div className="add-card">
      <TextField
        size="small"
        variant="outlined"
        placeholder="Add new card"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={handleAdd} variant="contained" size="small">
        Add
      </Button>
    </div>
  );
};

export default AddCard;