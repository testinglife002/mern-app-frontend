import React from 'react';
import { Paper, Typography } from '@mui/material';

const HeroSection = () => (
  <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
    <Typography variant="h4">Welcome!</Typography>
    <Typography variant="body1">This is your material design dashboard layout.</Typography>
  </Paper>
);

export default HeroSection;
