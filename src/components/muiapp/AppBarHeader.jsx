// src/components/muiapp/AppBarHeader.jsx
import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Box, Menu, MenuItem, Button, Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

const AppBarHeader = ({ mode, setMode, openSettings, openNotifications }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar position="fixed" sx={{ zIndex: 1201 }}>
      <Toolbar>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          My Dashboard
        </Typography>

        <Box>
          <Button
            color="inherit"
            onClick={handleOpenNavMenu}
            endIcon={<MenuIcon />}
          >
            Navigation
          </Button>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            <MenuItem onClick={handleCloseNavMenu}>Dashboard</MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>Reports</MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>Analytics</MenuItem>
          </Menu>
        </Box>

        <IconButton color="inherit" onClick={openNotifications}>
          <NotificationsIcon />
        </IconButton>

        <IconButton color="inherit" onClick={openSettings}>
          <SettingsIcon />
        </IconButton>

        <IconButton
          sx={{ ml: 1 }}
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          color="inherit"
        >
          {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>

        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 1 }}>
          <Avatar alt="User" />
        </IconButton>
        <Menu
          anchorEl={anchorElUser}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
          <MenuItem onClick={handleCloseUserMenu}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarHeader;
