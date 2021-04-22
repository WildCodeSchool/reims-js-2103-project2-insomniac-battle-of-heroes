import React from 'react';
import Game from './components/Game';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <div className="heroAvatar">
          <img src="https://nsa40.casimages.com/img/2021/04/15/210415123011254599.png" id="titleLogo" alt="title-logo" />
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
