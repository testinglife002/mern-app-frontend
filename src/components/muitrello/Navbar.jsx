// components/muitrello/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import ViewListIcon from '@mui/icons-material/ViewList';

const Navbar = ({ view, setView }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyBoard
        </Typography>
        <IconButton color="inherit" onClick={() => setView('board')}>
          <ViewKanbanIcon />
        </IconButton>
        <IconButton color="inherit" onClick={() => setView('list')}>
          <ViewListIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;