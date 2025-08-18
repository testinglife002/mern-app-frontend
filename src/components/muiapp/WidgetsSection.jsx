// ✅ components/WidgetsSection.jsx
import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

export default function WidgetsSection() {
  const widgets = [
    { title: 'Users', value: 1200, icon: <PeopleIcon fontSize="large" /> },
    { title: 'Sessions', value: 3000, icon: <ShowChartIcon fontSize="large" /> },
    { title: 'Sales', value: 950, icon: <AttachMoneyIcon fontSize="large" /> },
    { title: 'Revenue', value: '$20K', icon: <QueryStatsIcon fontSize="large" /> },
  ];

  return (
    <Box sx={{ mt: 4, px: 3 }}>
      <Typography variant="h5" gutterBottom>Analytics Widgets</Typography>
      <Grid container spacing={2}>
        {widgets.map((widget, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
              {widget.icon}
              <Box>
                <Typography variant="subtitle2">{widget.title}</Typography>
                <Typography variant="h6">{widget.value}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <img
              src="/analytics_chart.png"
              alt="Analytics Chart"
              style={{ width: '100%', borderRadius: 8 }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
