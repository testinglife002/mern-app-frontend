// components/muiapp/ContentSection.jsx
import React from 'react';
import {
  Box, Typography, Grid, Paper, ToggleButton, ToggleButtonGroup,
  Table, TableBody, TableCell, TableHead, TableRow
} from '@mui/material';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableRowsIcon from '@mui/icons-material/TableRows';

const sampleData = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  title: `Item ${i + 1}`,
  description: `This is the description for item ${i + 1}`,
  status: ['Todo', 'In Progress', 'Done'][i % 3],
}));

export default function ContentSection({ viewMode, setViewMode }) {
  return (
    <Box>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5">Content Section</Typography>
        <ToggleButtonGroup
          value={viewMode}
          exclusive
          onChange={(e, val) => val && setViewMode(val)}
          size="small"
        >
          <ToggleButton value="grid"><ViewModuleIcon /></ToggleButton>
          <ToggleButton value="list"><ViewListIcon /></ToggleButton>
          <ToggleButton value="board"><DashboardIcon /></ToggleButton>
          <ToggleButton value="table"><TableRowsIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Views */}
      {viewMode === 'grid' && (
        <Grid container spacing={2}>
          {sampleData.map(item => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}

      {viewMode === 'list' && (
        <Box display="flex" flexDirection="column" gap={2}>
          {sampleData.map(item => (
            <Paper key={item.id} sx={{ p: 2 }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2">{item.description}</Typography>
            </Paper>
          ))}
        </Box>
      )}

      {viewMode === 'board' && (
        <Box display="flex" gap={2} overflow="auto">
          {['Todo', 'In Progress', 'Done'].map(status => (
            <Box key={status} sx={{ minWidth: 250 }}>
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>{status}</Typography>
              {sampleData
                .filter(item => item.status === status)
                .map(item => (
                  <Paper key={item.id} sx={{ p: 2, mb: 1 }}>
                    <Typography variant="body1">{item.title}</Typography>
                  </Paper>
                ))}
            </Box>
          ))}
        </Box>
      )}

      {viewMode === 'table' && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleData.map(item => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Box>
  );
}
