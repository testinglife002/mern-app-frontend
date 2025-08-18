// ✅ components/SettingsPanel.jsx
import React from 'react';
import {
  Drawer, Box, Typography, IconButton, Divider, Switch, FormControlLabel
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SettingsPanel = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 300, p: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Settings</Typography>
          <IconButton onClick={onClose}><CloseIcon /></IconButton>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle1">Preferences</Typography>
        <FormControlLabel control={<Switch />} label="Enable Notifications" />
        <FormControlLabel control={<Switch />} label="Compact Layout" />
        <FormControlLabel control={<Switch />} label="Auto Dark Mode" />
      </Box>
    </Drawer>
  );
};

export default SettingsPanel;
