import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button
} from '@mui/material';

const AddCardModal = ({ open, onClose, onAdd }) => {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (!title.trim()) return;
    onAdd(title.trim());
    setTitle('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Card</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          label="Card Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAdd} variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCardModal;
