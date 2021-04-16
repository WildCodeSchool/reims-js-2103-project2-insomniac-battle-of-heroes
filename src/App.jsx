import axios from 'axios';
import React, { useState } from 'react';
import Card from './components/Card';
import draw from './components/draw';
import './App.css';

function App() {
  const [hero, setHero] = useState();
  const [villain, setVillain] = useState();

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
          <div className="board">
            <div className="heroSide cards">
              {hero && <Card avatar={hero} />}
              <button type="button" onClick={() => showCards(draw(1), setHero)} className="drawButton">
                Draw hero
              </button>
            </div>
            <div className="villainSide cards">
              {villain && <Card avatar={villain} />}
              <button type="button" onClick={() => showCards(draw(1), setVillain)} className="drawButton">
                Draw villain
              </button>
            </div>
          </div>
        </body>
      </div>
    </>
  );
}

export default App;
