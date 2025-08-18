// 📌 4. HeroSection.jsx
import React from 'react';
import { Card } from 'react-bootstrap';

const HeroSection = () => (
  <Card className="mb-4 shadow">
    <Card.Body>
      <h2>Welcome to the Dashboard</h2>
      <p className="text-muted">This is your control center for all applications.</p>
    </Card.Body>
  </Card>
);

export default HeroSection;
