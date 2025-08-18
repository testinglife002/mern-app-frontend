// srcsrc/components/muiapp/Sidebar.jsx
import React, { useState } from 'react';
import {
  Drawer, IconButton, Box, Typography, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Tooltip
} from '@mui/material';
import {
  Dashboard, ExpandLess, ExpandMore, Settings, Menu as MenuIcon, Apps, Add
} from '@mui/icons-material';
// import MenuIcon from '@mui/icons-material/Menu';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
 import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const drawerWidth = 260;
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
          overflowX: 'hidden',
          pt: 8
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 1 }}>
        <IconButton onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Box sx={{ px: -1 }} >
        <Typography variant="subtitle2" sx={{ mb: 2 }}>
          App Sections
        </Typography>



        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="home" title="Home">
                Tab content for Home
            </Tab>
            <Tab eventKey="profile" title="Profile">
                Tab content for Profile
            </Tab>
            <Tab eventKey="contact" title="Contact">
                Tab content for Contact
            </Tab>
        </Tabs>

        <br/>

      </Box>
      <br/><hr/><br/>

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
