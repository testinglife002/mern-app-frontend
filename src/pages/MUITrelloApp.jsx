// // src/pages/MUITrelloApp.jsx
import React, { useState } from 'react';

import './MUITrelloApp.css';
import Navbar from '../components/muitrello/Navbar';
import BoardView from '../components/muitrello/BoardView';
import ActivityFeed from '../components/muitrello/ActivityFeed';
import ListView from '../components/muitrello/ListView';
import ActivityFeeds from '../components/muitrello/ActivityFeeds';

const MUITrelloApp = () => {
  const [view, setView] = useState('board');
  const [activity, setActivity] = useState([]);

  const addActivity = (message) => {
    setActivity((prev) => [
      { message, timestamp: new Date().toLocaleTimeString() },
      ...prev,
    ]);
  };

  return (
    <div className="app">
      <Navbar view={view} setView={setView} />
      <main className="main-container">
        {view === 'board' ? (
          <BoardView addActivity={addActivity} />
        ) : (
          <ListView addActivity={addActivity} />
        )}
        
        <div className='pull-right' style={{marginLeft:'550px'}}>
        {/*<ActivityFeed activity={activity} />*/}
        {<ActivityFeeds />}
        </div>
      </main>
    </div>
  );
};

export default MUITrelloApp;