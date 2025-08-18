// src/pages/MUIApp.jsx


import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box, Typography } from '@mui/material';
import { getTheme } from './theme';
import AppBarHeader from '../components/muiapp/AppBarHeader';
import Sidebar from '../components/muiapp/Sidebar';
import HeroSection from '../components/muiapp/HeroSection';
import Slideshow from '../components/muiapp/Slideshow';
import ContentSection from '../components/muiapp/ContentSection';
import WidgetsSection from '../components/muiapp/WidgetsSection';
import Footer from '../components/muiapp/Footer';
import SettingsPanel from '../components/muiapp/SettingsPanel';
import NotificationsPanel from '../components/muiapp/NotificationsPanel';
import SlideshowUI from '../components/muiapp/SlideshowUI';


export default function MUIApp() {
  const [mode, setMode] = useState('light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // grid | list | board | table

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <AppBarHeader
        mode={mode}
        setMode={setMode}
        openSettings={() => setSettingsOpen(true)}
        openNotifications={() => setNotificationsOpen(true)}
      />

      

      {<Box sx={{ display: 'flex' }}>
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <Box sx={{ flexGrow: 1 }}>
          <HeroSection />
          {/*<Slideshow />*/}
          {/*<SlideshowUI />*/}
          <ContentSection viewMode={viewMode} setViewMode={setViewMode} />
          <WidgetsSection />
          <Footer />
        </Box>
        <SettingsPanel open={settingsOpen} onClose={() => setSettingsOpen(false)} />
        <NotificationsPanel open={notificationsOpen} onClose={() => setNotificationsOpen(false)} />
      </Box>}
    </ThemeProvider>
  );
}

