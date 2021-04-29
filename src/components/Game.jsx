import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import Card from './Card';
import FightingCard from './FightingCard';
import drawCards from './drawCards';
import './Game.css';

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
    <>
      <div className="gameNavBar">
        <NavBar />
      </div>

      <div className="board">

        <div className="heroSide">
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
        && <FightingCard className="heroFightingCard" avatar={heroList.find((hero) => hero.id === heroFighterId)} />}

        <div className="gameLogoContent">
          <Logo />
        </div>

        {villainFighterId
        && <FightingCard className="villainFightingCard" avatar={villainList.find((villain) => villain.id === villainFighterId)} />}

        <div className="villainSide">
          {villainList.map((villain) => (
            <Card
              key={villain.id}
              avatar={villain}
              fighterId={villainFighterId}
              setFighterId={setVillainFighterId}
            />
          ))}
        </div>

        <div className="buttonsLine">
          <button type="button" onClick={() => drawCards(1, setHeroList)} className="drawButton">
            Draw hero
          </button>
          <button type="button" onClick={() => drawCards(1, setVillainList)} className="drawButton">
            Draw villain
          </button>
        </div>
      </div>
    </>
  );
}

export default Game;
