import React, { useState, useEffect } from 'react';
import Card from './Card';
import drawCards from './drawCards';
import '../App.css';

function Game() {
  const [heroList, setHeroList] = useState([]);
  const [villainList, setVillainList] = useState([]);
  const [fighterId, setFighterId] = useState('');

  useEffect(() => {
    drawCards(5, setHeroList);
    drawCards(5, setVillainList);
  }, []);

  return (
    <div className="board">
      <div className="heroSide cards">
        <button type="button" onClick={() => drawCards(1, setHeroList)} className="drawButton">
          Draw hero
        </button>
        {heroList.map((hero) => (
          <Card
            key={hero.id}
            avatar={hero}
            fighterId={fighterId}
            setFighterId={setFighterId}
          />
        ))}
      </div>
      <div className="villainSide cards">
        <button type="button" onClick={() => drawCards(1, setVillainList)} className="drawButton">
          Draw villain
        </button>
        {villainList.map((villain) => (
          <Card
            key={villain.id}
            avatar={villain}
            fighterId={fighterId}
            setFighterId={setFighterId}
          />
        ))}
      </div>
    </div>
  );
}

export default Game;
