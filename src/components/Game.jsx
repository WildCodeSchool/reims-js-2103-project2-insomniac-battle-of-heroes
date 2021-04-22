import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import drawCards from './drawCards';
import '../App.css';

function Game({
  heroList, setHeroList, villainList, setVillainList,
}) {
  return (
    <div className="board">
      <div className="heroSide cards">
        <button type="button" onClick={() => drawCards(1, setHeroList)} className="drawButton">
          Draw hero
        </button>
        {heroList.map((hero) => (<Card className="heroHand" avatar={hero} />))}
      </div>
      <div className="villainSide cards">
        <button type="button" onClick={() => drawCards(1, setVillainList)} className="drawButton">
          Draw villain
        </button>
        {villainList.map((villain) => (<Card className="villainHand" avatar={villain} />))}
      </div>
    </div>
  );
}

Game.propTypes = {
  heroList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setHeroList: PropTypes.func.isRequired,
  villainList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setVillainList: PropTypes.func.isRequired,
};

export default Game;
