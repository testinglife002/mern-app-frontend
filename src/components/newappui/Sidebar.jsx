// 📌 3. Sidebar.jsx — with Nav Pills Tabs
import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = ({ activeTab, setActiveTab }) => (
  <div className="sidebar bg-dark text-white p-3">
    <Nav variant="pills" className="flex-column" activeKey={activeTab} onSelect={setActiveTab}>
      <Nav.Item>
        <Nav.Link eventKey="app1">📂 App 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="app2">📊 App 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="app3">📝 App 3</Nav.Link>
      </Nav.Item>
    </Nav>
  </div>
);

export default Sidebar;
