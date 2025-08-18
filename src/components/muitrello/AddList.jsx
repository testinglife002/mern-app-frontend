// components/modals/AddList.jsx
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const AddList = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (title.trim()) {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <div className="add-list">
      <TextField
        size="small"
        variant="outlined"
        placeholder="Add new list"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button onClick={handleAdd} variant="contained" size="small">
        Add
      </Button>
    </div>
  );
};

export default AddList;