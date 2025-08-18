// 📌 2. Header.jsx
import React from 'react';
import { Navbar, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';

const Header = ({ darkMode, setDarkMode }) => (
  <Navbar bg={darkMode ? 'dark' : 'primary'} variant="dark" className="px-4 py-3" expand="lg">
    <Navbar.Brand href="#">🧩 MyMaterial</Navbar.Brand>

    <Form className="d-flex mx-auto w-50">
      <FormControl type="search" placeholder="Search..." className="me-2" />
      <Button variant="light">Search</Button>
    </Form>

    <div className="d-flex align-items-center gap-3">
      <Button variant="outline-light" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '🌞' : '🌙'}
      </Button>

      <NavDropdown title="👤 Profile" align="end">
        <NavDropdown.Item href="#">Dashboard</NavDropdown.Item>
        <NavDropdown.Item href="#">Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#">Logout</NavDropdown.Item>
      </NavDropdown>
    </div>
  </Navbar>
);

export default Header;
