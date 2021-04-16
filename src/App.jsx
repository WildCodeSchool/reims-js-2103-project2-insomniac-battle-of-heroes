import axios from 'axios';
import React, { useState } from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  const [hero, setHero] = useState();
  const [vilain, setVilain] = useState();

  function showCards(id, setAvatar) {
    const url = `http://localhost:8000/api/${id}/`;
    axios.get(url)
      .then((response) => {
        setAvatar(response.data);
      });
  }

  return (
    <>
      <div className="App">
        <body>
          <div className="heroAvatar">
            <img src="https://nsa40.casimages.com/img/2021/04/15/210415123011254599.png" id="titleLogo" alt="title-logo" />
          </div>
          <div className="navBar">
            <button type="button" className="buttonOnMenu1">Menu</button>
            <button type="button" className="buttonOnMenu2">Play</button>
            <button type="button" className="buttonOnMenu3">Collection</button>
          </div>
          <div className="cards">
            {hero && <Card avatar={hero} />}
            <button type="button" onClick={() => showCards(396, setHero)} className="drawButton">
              Draw hero
            </button>
            {vilain && <Card avatar={vilain} />}
            <button type="button" onClick={() => showCards(60, setVilain)} className="drawButton">
              Draw villain
            </button>
          </div>
        </body>
      </div>
    </>
  );
}

export default App;
