// src/pages/NewAppUI.jsx
import React, { useState } from 'react';
import './NewAppUI.css';
import Header from '../components/newappui/Header';
import Sidebar from '../components/newappui/Sidebar';
import HeroSection from '../components/newappui/HeroSection';
import ContentSection from '../components/newappui/ContentSection';
import Footer from '../components/newappui/Footer';


function NewAppUI() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('app1');

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="d-flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-grow-1 p-3">
          <HeroSection />
          <ContentSection app={activeTab} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default NewAppUI;
