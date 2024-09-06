import React from 'react';
import VideoFeed from './VideoFeed';
import AudioFeed from './AudioFeed';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>VISOR</h1>
      </header>
      <main>
        <VideoFeed />
        <AudioFeed />
      </main>
    </div>
  );
}

export default App;
