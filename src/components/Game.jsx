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
  const [hasDraw, setHasDraw] = useState(false);
  const [hasPicked, setHasPicked] = useState(false);

  useEffect(() => {
    drawCards(5, setHeroList);
    drawCards(5, setVillainList);
  }, []);

  function endTurn() {
    setPlayerTurn(!playerTurn);
    setHasDraw(false);
    setHasPicked(false);
  }

  useEffect(() => {
    if (hasDraw && heroFighterId && villainFighterId) {
      endTurn();
    }
    if (hasDraw && hasPicked) {
      endTurn();
    }
  }, [hasDraw, hasPicked]);

  return (
    <>
      <div className="gameNavBar">
        <NavBar />
      </div>

      <div className="board">

        <div className="heroSHandButton">
          {playerTurn && (
          <Modal buttonContent="Hero's hand">
            {heroList.map((hero) => (
              <Card
                key={hero.id}
                avatar={hero}
                playerTurn={playerTurn}
                fighterId={heroFighterId}
                setFighterId={setHeroFighterId}
              />
            ))}
            { (heroList.length < 5) && (
            <button className="button" id="drawHeroButton" type="button" onClick={() => { drawCards(1, setHeroList); setHasDraw(true); }}>
              Draw hero
            </button>
            )}
          </Modal>
          )}
        </div>

        <label id="heroPlayerHp" htmlFor="heroPlayerHp">
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
            setHasPicked={setHasPicked}
          />
          )}
        </div>

        {heroFighterId && villainFighterId && playerTurn && (
          <div className="heroActionButtons">
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

            <button
              className="redButton"
              id="heroPowerStrikeButton"
              type="button"
              onClick={function heroPowerAttack() {
                setVillainFighterHp(villainFighterHp - powerStrike(heroFighterStr));
                endTurn();
              }}
            >
              Hero power strike
            </button>
          </div>
        )}

        {heroFighterId && villainFighterId && playerTurn && (
        <button
          className="redButton"
          id="heroSacrificeButton"
          type="button"
          onClick={function heroSacrifice() {
            setHeroFighterHp(0);
            drawCards(6 - heroList.length, setHeroList);
          }}
        >
          Hero sacrifice
        </button>
        )}

        <div className="playerTurn">
          <label htmlFor="PlayerTurn">
            {playerTurn ? 'Hero ' : 'Villain '}
            it&apos;s your turn !
          </label>
          <button type="button" className="redButton" onClick={() => setPlayerTurn(!playerTurn)}>End Turn</button>
        </div>

        <div className="gameLogoContent">
          <Logo />
        </div>

        <div className="villainSHandButton">
          {!playerTurn && (
          <Modal buttonContent="Villain's hand">
            {villainList.map((villain) => (
              <Card
                key={villain.id}
                avatar={villain}
                playerTurn={!playerTurn}
                fighterId={villainFighterId}
                setFighterId={setVillainFighterId}
              />
            ))}
            { (villainList.length < 5) && (
            <button className="button" id="drawVillainButton" type="button" onClick={() => { drawCards(1, setVillainList); setHasDraw(true); }}>
              Draw villain
            </button>
            )}
          </Modal>
          )}
        </div>

        <label id="villainPlayerHp" htmlFor="villainPlayerHp">
          Villain HP :
          {' '}
          <span className="white">{villainPlayerHp}</span>
          {' '}
          <span className="red">&#9829;</span>
          {' '}
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
            setHasPicked={setHasPicked}
          />
          )}
        </div>

        {heroFighterId && villainFighterId && !playerTurn && (
          <div className="villainActionButtons">
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

            <button
              className="redButton"
              id="villainPowerStrikeButton"
              type="button"
              onClick={function villainPowerAttack() {
                setHeroFighterHp(heroFighterHp - powerStrike(villainFighterStr));
                endTurn();
              }}
            >
              Villain power strike
            </button>
          </div>
        )}

        {heroFighterId && villainFighterId && !playerTurn && (
        <button
          className="redButton"
          id="villainSacrificeButton"
          type="button"
          onClick={function villainSacrifice() {
            setVillainFighterHp(0);
            drawCards(6 - villainList.length, setVillainList);
          }}
        >
          Villain sacrifice
        </button>
        )}

        {(heroPlayerHp <= 0 || villainPlayerHp <= 0) && (
        <Modal isPersistent>
          {heroPlayerHp <= 0 && <h1>Villain win</h1>}
          {villainPlayerHp <= 0 && <h1>Hero win</h1>}
          <button type="button" onClick={() => window.location.reload(true)}>
            Play again
          </button>
        </Modal>
        )}
      </div>
    </>
  );
}

export default Game;
