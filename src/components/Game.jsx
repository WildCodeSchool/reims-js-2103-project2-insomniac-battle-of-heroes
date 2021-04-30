import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import FightingCard from './FightingCard';
import drawCards from './drawCards';
import Modal from './Modal';
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
  const [showHero, setShowHero] = useState(false);
  const [showVillain, setShowVillain] = useState(false);

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
          <Modal
            avatarList={heroList}
            avatarFighterId={heroFighterId}
            setAvatarFighterId={setHeroFighterId}
            show={showHero}
            setShow={setShowHero}
          />
        </div>
        {!showHero && <button className="drawButton" type="button" onClick={() => setShowHero(true)}>Show Hero hand</button>}
        <div>
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
          {heroFighterId && villainFighterId && <button className="drawButton" type="button" onClick={() => setVillainFighterHp(parseInt(villainFighterHp, 10) - parseInt(heroFighterStr, 10))}>Hero attack</button>}
        </div>
        <div className="gameLogoContent">
          <Logo />
        </div>
        <div>
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
          {heroFighterId && villainFighterId && <button className="drawButton" type="button" onClick={() => setHeroFighterHp(parseInt(heroFighterHp, 10) - parseInt(villainFighterStr, 10))}>Villain attack</button>}
        </div>
        <div className="villainSide">
          <label htmlFor="villainPlayerHp">
            HP :
            {villainPlayerHp}
          </label>
          <Modal
            avatarList={villainList}
            avatarFighterId={villainFighterId}
            setAvatarFighterId={setVillainFighterId}
            show={showVillain}
            setShow={setShowVillain}
          />
        </div>
        {!showVillain && <button className="drawButton" type="button" onClick={() => setShowVillain(true)}>Show Villain hand</button>}
      </div>
      <div className="buttonsLine">
        <button type="button" onClick={() => drawCards(1, setHeroList)} className="drawButton">
          Draw hero
        </button>
        <button type="button" onClick={() => drawCards(1, setVillainList)} className="drawButton">
          Draw villain
        </button>
      </div>
    </>
  );
}

export default Game;
