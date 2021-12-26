import React from 'react';
import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Popup from './components/Popup';
import Word from './components/Word';
import WrongLetters from './components/WrongLetters';
import Notification from './components/Notification';

function App() {
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
