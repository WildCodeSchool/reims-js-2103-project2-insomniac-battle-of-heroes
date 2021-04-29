import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import Card from './Card';
import FightingCard from './FightingCard';
import drawCards from './drawCards';
import './Game.css';

function Game() {
  const [heroPlayerHp, setHeroPlayerHp] = useState();
  const [heroList, setHeroList] = useState([]);
  const [heroFighterId, setHeroFighterId] = useState();
  const [heroFighterStr, setHeroFighterStr] = useState();
  const [heroFighterHp, setHeroFighterHp] = useState();
  const [villainPlayerHp, setVillainPlayerHp] = useState();
  const [villainList, setVillainList] = useState([]);
  const [villainFighterId, setVillainFighterId] = useState();
  const [villainFighterStr, setVillainFighterStr] = useState();
  const [villainFighterHp, setVillainFighterHp] = useState();
  const [playerTurn, setPlayerTurn] = useState(true);

  useEffect(() => {
    drawCards(5, setHeroList);
    drawCards(5, setVillainList);
    setHeroPlayerHp(300);
    setVillainPlayerHp(300);
  }, []);

  return (
    <>
      <div className="gameNavBar">
        <NavBar />
      </div>
      <div className="board">
        <div className="heroSide">
          <label htmlFor="heroPlayerHp">
            HP :
            {heroPlayerHp}
          </label>
          <label htmlFor="PlayerTurn">
            {playerTurn ? 'Hero ' : 'Villain '}
            it is your turn
          </label>
          <button type="button" className="turnBtn" onClick={() => setPlayerTurn(!playerTurn)}>End Turn</button>
          {heroList.map((hero) => (
            <Card
              key={hero.id}
              avatar={hero}
              playerTurn={playerTurn}
              fighterId={heroFighterId}
              setFighterId={setHeroFighterId}
            />
          ))}
        </div>
        {heroFighterId
        && (
        <FightingCard
          avatar={heroList.find((hero) => hero.id === heroFighterId)}
          avatarList={heroList}
          setAvatarList={setHeroList}
          fighterStr={heroFighterStr}
          setFighterStr={setHeroFighterStr}
          fighterHp={heroFighterHp}
          setFighterHp={setHeroFighterHp}
          fighterId={heroFighterId}
          setFighterId={setHeroFighterId}
          playerHp={heroPlayerHp}
          setPlayerHp={setHeroPlayerHp}
        />
        )}
        {heroFighterId && villainFighterId && playerTurn && <button type="button" onClick={() => setVillainFighterHp(parseInt(villainFighterHp, 10) - parseInt(heroFighterStr, 10))}>Hero attack</button>}
        <div className="gameLogoContent">
          <Logo />
        </div>
        {villainFighterId
        && (
        <FightingCard
          avatar={villainList.find((villain) => villain.id === villainFighterId)}
          avatarList={villainList}
          setAvatarList={setVillainList}
          fighterStr={villainFighterStr}
          setFighterStr={setVillainFighterStr}
          fighterHp={villainFighterHp}
          setFighterHp={setVillainFighterHp}
          fighterId={villainFighterId}
          setFighterId={setVillainFighterId}
          playerHp={villainPlayerHp}
          setPlayerHp={setVillainPlayerHp}
        />
        )}
        {heroFighterId && villainFighterId && !playerTurn && <button type="button" onClick={() => setHeroFighterHp(parseInt(heroFighterHp, 10) - parseInt(villainFighterStr, 10))}>Villain attack</button>}
        <div className="villainSide">
          <label htmlFor="villainPlayerHp">
            HP :
            {villainPlayerHp}
          </label>
          {villainList.map((villain) => (
            <Card
              key={villain.id}
              avatar={villain}
              playerTurn={!playerTurn}
              fighterId={villainFighterId}
              setFighterId={setVillainFighterId}
            />
          ))}
        </div>
        <div className="buttonsLine">
          { playerTurn && (
          <button type="button" onClick={() => drawCards(1, setHeroList)} className="drawButton">
            Draw hero
          </button>
          )}
          { !playerTurn && (
          <button type="button" onClick={() => drawCards(1, setVillainList)} className="drawButton">
            Draw villain
          </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Game;
