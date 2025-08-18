import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <button onClick={toggleSidebar} className="toggle-btn">☰</button>
      <ul>
        <li>🏠 Dashboard</li>
        <li>📁 Files</li>
        <li>⚙️ Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
