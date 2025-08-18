// 📌 5. ContentSection.jsx
import React, { useState } from 'react';
import { Row, Col, Card, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

const dummyContent = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  title: `Content Item ${i + 1}`,
  desc: `This is the description of item ${i + 1}.`
}));

const ContentSection = ({ app }) => {
  const [view, setView] = useState('grid');

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Current View: {app.toUpperCase()}</h4>
        <ToggleButtonGroup type="radio" name="view" value={view} onChange={setView}>
          <ToggleButton id="tbg-radio-1" value="grid" variant="outline-primary">Grid</ToggleButton>
          <ToggleButton id="tbg-radio-2" value="list" variant="outline-primary">List</ToggleButton>
        </ToggleButtonGroup>
      </div>

      {view === 'grid' ? (
        <Row xs={1} md={2} lg={3} className="g-3">
          {dummyContent.map(item => (
            <Col key={item.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="d-flex flex-column gap-3">
          {dummyContent.map(item => (
            <Card key={item.id}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentSection;
