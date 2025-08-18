// /src/pages/ThemeApp.jsx
import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { getTheme } from './theme';
import Sidebar from '../components/themeapp/Sidebar';
import AppBarHeader from '../components/themeapp/AppBarHeader';
import HeroSection from '../components/themeapp/HeroSection';
import ContentSection from '../components/themeapp/ContentSection';
import Footer from '../components/themeapp/Footer';

export default function ThemeApp() {
  const [mode, setMode] = useState('light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState('dashboard');

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <Box sx={{ flexGrow: 1 }}>
          <AppBarHeader mode={mode} setMode={setMode} />
          <Box p={3}>
            <HeroSection />
            <ContentSection tab={selectedTab} />
          </Box>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
