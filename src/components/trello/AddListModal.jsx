import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button
} from '@mui/material';

const AddListModal = ({ open, onClose, onAdd }) => {
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (!name.trim()) return;
    onAdd(name.trim());
    setName('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New List</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          label="List Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

export default AddListModal;
