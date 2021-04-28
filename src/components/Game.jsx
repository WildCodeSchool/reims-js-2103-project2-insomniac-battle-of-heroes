/* eslint-disable max-len */
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
      <div className="gameLogoContent">
        <Logo />
      </div>
      <div className="gameNavBar">
        <NavBar />
      </div>

      <div className="board">
        <div className="heroSide cards">
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
        <div className="gameLogoContent">
          <img src="./images/logo-iboh-flat-400.png" id="gameTitleLogo" alt="game-title-logo" />
          <span id="gameLogoBack" />
        </div>
        {villainFighterId
        && <FightingCard avatar={villainList.find((villain) => villain.id === villainFighterId)} />}
        <div className="villainSide cards">
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
