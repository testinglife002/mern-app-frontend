import React, { useState } from 'react';
import {
  Drawer, List, ListItemButton, ListItemIcon, ListItemText, Collapse, IconButton, Tooltip
} from '@mui/material';
import {
  Dashboard, ExpandLess, ExpandMore, Settings, Menu as MenuIcon, Apps, Add
} from '@mui/icons-material';

const drawerWidth = 250;
const collapsedWidth = 80;

const Sidebar = ({ isOpen, toggleSidebar, selectedTab, setSelectedTab }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isOpen ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isOpen ? drawerWidth : collapsedWidth,
          transition: 'width 0.3s',
          overflowX: 'hidden'
        },
      }}
    >
      <List>
        <Tooltip title="Toggle Sidebar" placement="right">
          <IconButton onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
        </Tooltip>

        <ListItemButton selected={selectedTab === 'dashboard'} onClick={() => setSelectedTab('dashboard')}>
          <ListItemIcon><Dashboard /></ListItemIcon>
          {isOpen && <ListItemText primary="Dashboard" />}
        </ListItemButton>

        <ListItemButton onClick={() => setOpenDropdown(!openDropdown)}>
          <ListItemIcon><Apps /></ListItemIcon>
          {isOpen && <ListItemText primary="Apps" />}
          {isOpen && (openDropdown ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>

        <Collapse in={openDropdown} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: isOpen ? 4 : 2 }}
              selected={selectedTab === 'app1'}
              onClick={() => setSelectedTab('app1')}
            >
              <ListItemIcon><Add /></ListItemIcon>
              {isOpen && <ListItemText primary="App One" />}
            </ListItemButton>
            <ListItemButton
              sx={{ pl: isOpen ? 4 : 2 }}
              selected={selectedTab === 'app2'}
              onClick={() => setSelectedTab('app2')}
            >
              <ListItemIcon><Add /></ListItemIcon>
              {isOpen && <ListItemText primary="App Two" />}
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton selected={selectedTab === 'settings'} onClick={() => setSelectedTab('settings')}>
          <ListItemIcon><Settings /></ListItemIcon>
          {isOpen && <ListItemText primary="Settings" />}
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
