import React, { useState, useEffect } from 'react';
import Card from './Card';
import drawCards from './drawCards';
import '../App.css';
import FightingCard from './FightingCard';

function Game() {
  const [heroList, setHeroList] = useState([]);
  const [villainList, setVillainList] = useState([]);
  const [heroFighterId, setHeroFighterId] = useState();
  const [villainFighterId, setVillainFighterId] = useState();

  useEffect(() => {
    drawCards(5, setHeroList);
    drawCards(5, setVillainList);
  }, []);

  useEffect(() => {
    console.log(`${heroFighterId} versus ${villainFighterId}`);
  }, [heroFighterId, villainFighterId]);

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
            fighterId={heroFighterId}
            setFighterId={setHeroFighterId}
          />
        ))}
      </div>
      {heroFighterId
      && <FightingCard avatar={heroList.find((hero) => hero.id === heroFighterId)} />}
      {villainFighterId
      && <FightingCard avatar={villainList.find((villain) => villain.id === villainFighterId)} />}
      <div className="villainSide cards">
        <button type="button" onClick={() => drawCards(1, setVillainList)} className="drawButton">
          Draw villain
        </button>
        {villainList.map((villain) => (
          <Card
            key={villain.id}
            avatar={villain}
            fighterId={villainFighterId}
            setFighterId={setVillainFighterId}
          />
        ))}
      </div>
    </div>
  );
}

export default Game;
