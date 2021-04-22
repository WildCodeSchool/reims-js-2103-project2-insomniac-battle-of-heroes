import React, { useEffect, useState } from 'react';
import Game from './components/Game';
import drawCards from './components/drawCards';
import './App.css';

function App() {
  const [heroList, setHeroList] = useState([]);
  const [villainList, setVillainList] = useState([]);

  useEffect(() => {
    drawCards(5, setHeroList);
    drawCards(5, setVillainList);
  }, []);

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
          <Game
            heroList={heroList}
            setHeroList={setHeroList}
            villainList={villainList}
            setVillainList={setVillainList}
          />
        </body>
      </div>
    </>
  );
}

export default App;
