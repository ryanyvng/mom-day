import React, { useRef, useState } from 'react';
import './App.css';

const voiceNotes = [
  '/recordings/eat.mp3',
  '/recordings/happy mothers day.mp3',
  '/recordings/huh.mp3',
  '/recordings/lia hong.mp3',
  '/recordings/mom.mp3',
  '/recordings/wei le ge ba.mp3'
];

const pics = [
  '/pics/1.jpg',
  '/pics/2.jpg',
  '/pics/3.jpg',
  '/pics/4.jpg',
  '/pics/5.jpg',
]

function App() {
  const audioRef = useRef(null);
  const [caption, setCaption] = useState('');
  const [currentSrc, setCurrentSrc] = useState('');
  const [currentPic, setCurrentPic] = useState('');

  const handlePlay = () => {
    const randomNote = voiceNotes[Math.floor(Math.random() * voiceNotes.length)];
    const randomPic = pics[Math.floor(Math.random() * pics.length)];
    setCurrentSrc(randomNote);
    setCurrentPic(randomPic);
    setCaption("Love you, Mom");
    
    setTimeout(() => {
      audioRef.current.play();
    }, 100);
  };

  return (
    <div className="container">
      <h1>🌼🌸🌻 高兴妈妈天 🌼🌸🌻</h1>
      <button onClick={handlePlay}>▶️ Play Message</button>
      <p>{caption}</p>
      {currentPic && (
        <img src={currentPic} alt="memory" className="photo" />
      )}
      <audio ref={audioRef} src={currentSrc} />
    </div>
  );
}

export default App;
