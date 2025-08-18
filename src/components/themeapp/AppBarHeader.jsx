// src/components/themeapp/📌 3. AppBarHeader.jsx
import React from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, InputBase, Menu, MenuItem
} from '@mui/material';
import { Brightness4, Brightness7, AccountCircle } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';

export default function AppBarHeader({ mode, setMode }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>🧩 MyMaterial</Typography>
        <div style={{ position: 'relative', marginRight: '1rem' }}>
          <SearchIcon style={{ position: 'absolute', top: 8, left: 10 }} />
          <InputBase placeholder="Search…" sx={{
            pl: 4, pr: 1, background: 'white', borderRadius: 1, color: 'black'
          }} />
        </div>
        <IconButton color="inherit" onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
          {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
        <IconButton color="inherit" onClick={(e) => setAnchorEl(e.currentTarget)}>
          <AccountCircle />
        </IconButton>
        <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Settings</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
