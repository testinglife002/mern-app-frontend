// src/pages/AppUI.jsx
import React, { useState } from 'react';
import './appui.css';
import Header from '../components/appui/Header';
import Navbar from '../components/appui/Navbar';
import Sidebar from '../components/appui/Sidebar';
import HeroSection from '../components/appui/HeroSection';
import ContentSection from '../components/appui/ContentSection';
import Footer from '../components/appui/Footer';


function AppUI() {
  
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="app">
      <Header />
      <Navbar />
      <div className="main-layout">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="main-content">
          <HeroSection />
          <ContentSection />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default AppUI;
