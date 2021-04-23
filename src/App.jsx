import React from 'react';
import Game from './components/Game';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <div className="logoContent">
          <img src="./images/logo-iboh-flat-400.png" id="titleLogo" alt="title-logo" />
          <span id="logoBack" />
        </div>
        <div className="navBar">
          <button type="button" className="buttonOnMenu1">Menu</button>
          <button type="button" className="buttonOnMenu2">Play</button>
          <button type="button" className="buttonOnMenu3">Collection</button>
        </div>
        <Game />
      </div>
    </>
  );
}

export default App;
