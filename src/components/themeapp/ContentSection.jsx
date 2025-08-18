import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const mockData = Array.from({ length: 6 }, (_, i) => ({
  id: i, title: `Item ${i + 1}`, desc: `Details for item ${i + 1}`
}));

const ContentSection = ({ tab }) => (
  <Grid container spacing={2}>
    {mockData.map(item => (
      <Grid item xs={12} sm={6} md={4} key={item.id}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">{item.title}</Typography>
          <Typography variant="body2">{item.desc}</Typography>
        </Paper>
      </Grid>
    ))}
  </Grid>
);

export default ContentSection;
