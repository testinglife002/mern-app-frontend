import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li onClick={() => setOpen(!open)}>
          <a href="#">Features ▾</a>
          {open && (
            <ul className="dropdown">
              <li><a href="#">Feature 1</a></li>
              <li><a href="#">Feature 2</a></li>
            </ul>
          )}
        </li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
