// components/ActivityFeed.jsx
import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = ({ activity }) => {
  return (
    <div className="activity-feed">
      <h4>Activity Feed</h4>
      <ul>
        {activity.map((act, idx) => (
          <li key={idx}>
            <span>{act.timestamp}</span>: {act.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;