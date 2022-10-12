import React from 'react';
import logo from './logo.svg';
import { ShortenerField } from './features/shortener-field/ShortenerField';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ShortenerField />
    </header>
    </div>
  );
}

export default App;
