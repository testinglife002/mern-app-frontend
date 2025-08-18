// ✅ components/NotificationsPanel.jsx
import React from 'react';
import {
  Drawer, Box, Typography, IconButton, Divider, List, ListItem, ListItemText
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const notifications = [
  { id: 1, title: 'New user registered', time: '1 min ago' },
  { id: 2, title: 'Server restarted', time: '10 min ago' },
  { id: 3, title: 'Report generated', time: '30 min ago' },
];

const NotificationsPanel = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 300, p: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Notifications</Typography>
          <IconButton onClick={onClose}><CloseIcon /></IconButton>
        </Box>

        <Divider sx={{ my: 2 }} />

        <List>
          {notifications.map(note => (
            <ListItem key={note.id}>
              <ListItemText primary={note.title} secondary={note.time} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default NotificationsPanel;
