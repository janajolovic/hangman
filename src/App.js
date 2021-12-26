import React from 'react';
import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Popup from './components/Popup';
import Word from './components/Word';
import WrongLetters from './components/WrongLetters';
import Notification from './components/Notification';

function App() {
  const words = ['programming', 'javascript', 'react', 'hangman'];
  let selectedWord = words[Math.floor(Math.random() * words.length)];
  let playable = true;
  const correctLetters = [];
  const wrongLetters = [];
  return (
    <div>
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters />
        <Word />
        <Popup />
        <Notification />
      </div>
    </div>
  );
}

export default App;
