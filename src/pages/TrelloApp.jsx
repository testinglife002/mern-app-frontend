// src/pages/TrelloApp.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';
import Board from '../components/trello/Board';
// import Board from './components/Board';

function TrelloApp() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        🧩 Trello Clone with Material UI
      </Typography>
      <Board />
    </Container>
  );
}

export default TrelloApp;
