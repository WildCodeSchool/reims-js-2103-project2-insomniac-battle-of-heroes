import React, { useState, useEffect } from 'react';
import Card from './Card';
import drawCards from './drawCards';
import '../App.css';
import FightingCard from './FightingCard';

function Game() {
  const [heroPlayerHp, setHeroPlayerHp] = useState();
  const [heroList, setHeroList] = useState([]);
  const [heroFighterId, setHeroFighterId] = useState();
  const [heroFighterStr, setHeroFighterStr] = useState();
  const [heroFighterHp, setHeroFighterHp] = useState();
  const [villainPlayerHp, setVillainPlayerHp] = useState(300);
  const [villainList, setVillainList] = useState([]);
  const [villainFighterId, setVillainFighterId] = useState();
  const [villainFighterStr, setVillainFighterStr] = useState();
  const [villainFighterHp, setVillainFighterHp] = useState();

  useEffect(() => {
    drawCards(5, setHeroList);
    drawCards(5, setVillainList);
    setHeroPlayerHp(300);
    setVillainPlayerHp(300);
  }, []);

  return (
    <div className="board">
      <div className="heroSide cards">
        <label htmlFor="heroPlayerHp">
          HP :
          {heroPlayerHp}
        </label>
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
      && (
      <FightingCard
        avatar={heroList.find((hero) => hero.id === heroFighterId)}
        fighterStr={heroFighterStr}
        setFighterStr={setHeroFighterStr}
        fighterHp={heroFighterHp}
        setFighterHp={setHeroFighterHp}
      />
      )}
      {heroFighterId && villainFighterId && <button type="button" onClick={() => setVillainFighterHp(parseInt(villainFighterHp, 10) - parseInt(heroFighterStr, 10))}>Hero attack</button>}
      {villainFighterId
      && (
      <FightingCard
        avatar={villainList.find((villain) => villain.id === villainFighterId)}
        fighterStr={villainFighterStr}
        setFighterStr={setVillainFighterStr}
        fighterHp={villainFighterHp}
        setFighterHp={setVillainFighterHp}
      />
      )}
      {heroFighterId && villainFighterId && <button type="button" onClick={() => setHeroFighterHp(parseInt(heroFighterHp, 10) - parseInt(villainFighterStr, 10))}>Villain attack</button>}
      <div className="villainSide cards">
        <label htmlFor="villainPlayerHp">
          HP :
          {villainPlayerHp}
        </label>
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
