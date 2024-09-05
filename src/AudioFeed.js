import React, { useEffect } from 'react';

function AudioFeed() {
  useEffect(() => {
    const audio = new Audio("http://localhost:5000/audio_feed");
    audio.loop = true;
    audio.play().catch(error => console.error('Audio playback failed:', error));

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <div className="audio-feed">
      <h2>Audio Alerts</h2>
    </div>
  );
}

export default AudioFeed;
