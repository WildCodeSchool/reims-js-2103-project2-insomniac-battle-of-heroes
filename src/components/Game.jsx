import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import Modal from './Modal';
import Card from './Card';
import FightingCard from './FightingCard';
import drawCards from './drawCards';
import powerStrike from './powerStrike';
import './Game.css';

function Game() {
  const [heroPlayerHp, setHeroPlayerHp] = useState(300);
  const [heroList, setHeroList] = useState([]);
  const [heroFighterId, setHeroFighterId] = useState();
  const [heroFighterStr, setHeroFighterStr] = useState();
  const [heroFighterHp, setHeroFighterHp] = useState();
  const [villainPlayerHp, setVillainPlayerHp] = useState(300);
  const [villainList, setVillainList] = useState([]);
  const [villainFighterId, setVillainFighterId] = useState();
  const [villainFighterStr, setVillainFighterStr] = useState();
  const [villainFighterHp, setVillainFighterHp] = useState();
  const [playerTurn, setPlayerTurn] = useState(true);

  useEffect(() => {
    drawCards(5, setHeroList);
    drawCards(5, setVillainList);
  }, []);

  function endTurn() {
    setPlayerTurn(!playerTurn);
  }

  return (
    <>
      <div className="gameNavBar">
        <NavBar />
      </div>
      <div className="board">
        <label className="hpDisplay" id="heroPlayerHp" htmlFor="heroPlayerHp">
          Hero HP :
          {' '}
          <span className="white">{heroPlayerHp}</span>
          {' '}
          <span className="red">&#9829;</span>
          <meter
            id="fuel"
            min="0"
            max="300"
            low="75"
            high="225"
            optimum="300"
            value={heroPlayerHp}
          />
        </label>
        <div className="heroSide">
          <label htmlFor="PlayerTurn">
            {playerTurn ? 'Hero ' : 'Villain '}
            it is your turn
          </label>
          <button type="button" className="turnBtn" onClick={() => endTurn()}>End Turn</button>
          <Modal buttonContent="Hero's hand" buttonShow={playerTurn}>
            {heroList.map((hero) => (
              <Card
                key={hero.id}
                avatar={hero}
                playerTurn={playerTurn}
                fighterId={heroFighterId}
                setFighterId={setHeroFighterId}
              />
            ))}
            { playerTurn && (heroList.length < 5) && (
            <button type="button" onClick={() => drawCards(1, setHeroList)} className="button" id="drawHeroButton">
              Draw hero
            </button>
            )}
          </Modal>
        </div>
        <div id="heroFightingCard">
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
        </div>
        {heroFighterId && villainFighterId && playerTurn && (
        <button
          className="button"
          id="heroAttackButton"
          type="button"
          onClick={function heroAttack() {
            setVillainFighterHp(villainFighterHp - heroFighterStr);
            endTurn();
          }}
        >
          Hero attack
        </button>
        )}
        {heroFighterId && villainFighterId && playerTurn && (
        <button
          className="button"
          type="button"
          onClick={function heroPowerAttack() {
            setVillainFighterHp(villainFighterHp - powerStrike(heroFighterStr));
            endTurn();
          }}
        >
          Hero Power Strike
        </button>
        )}
        <div className="gameLogoContent">
          <Logo />
        </div>
        <div id="villainFightingCard">
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
          {heroFighterId && villainFighterId && !playerTurn && (
          <button
            className="button"
            id="villainAttackButton"
            type="button"
            onClick={function villainAttack() {
              setHeroFighterHp(heroFighterHp - villainFighterStr);
              endTurn();
            }}
          >
            Villain attack
          </button>
          )}
          {heroFighterId && villainFighterId && !playerTurn && (
          <button
            className="button"
            type="button"
            onClick={function villainPowerAttack() {
              setHeroFighterHp(heroFighterHp - powerStrike(villainFighterStr));
              endTurn();
            }}
          >
            Villain Power Strike
          </button>
          )}
        </div>
        <label className="hpDisplay" id="villainPlayerHp" htmlFor="villainPlayerHp">
          Villain HP :
          {' '}
          <span className="white">{villainPlayerHp}</span>
          {' '}
          <span className="red">&#9829;</span>
          <meter
            id="fuel"
            min="0"
            max="300"
            low="75"
            high="225"
            optimum="300"
            value={villainPlayerHp}
          />
        </label>
        <div className="villainSide">
          <Modal buttonContent="Villain's hand" buttonShow={!playerTurn}>
            {villainList.map((villain) => (
              <Card
                key={villain.id}
                avatar={villain}
                playerTurn={!playerTurn}
                fighterId={villainFighterId}
                setFighterId={setVillainFighterId}
              />
            ))}
            { !playerTurn && (villainList.length < 5) && (
            <button type="button" onClick={() => drawCards(1, setVillainList)} className="button" id="drawVillainButton">
              Draw villain
            </button>
            )}
          </Modal>
        </div>
        {(heroPlayerHp <= 200 || villainPlayerHp <= 200) && (
          <Modal show>
            <h1>Player win</h1>
          </Modal>
        )}
      </div>
    </>
  );
}

export default Game;
