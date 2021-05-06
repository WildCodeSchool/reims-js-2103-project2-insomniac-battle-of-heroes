import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({
  avatar, fighterId, setFighterId, fighterHp, className, playerTurn,
}) {
  const classNameValue = className ?? (avatar.id === fighterId ? 'card clicked' : 'card');

  const durabilityClass = () => {
    if (fighterHp === avatar.powerstats.durability) {
      return 'greenText';
    }
    if (fighterHp <= avatar.powerstats.durability * 0.75
      && fighterHp > avatar.powerstats.durability * 0.25) {
      return 'orangeText';
    }
    if (fighterHp <= avatar.powerstats.durability * 0.25) {
      return 'redText';
    }
    return 'greenText';
  };

  return (
    <>
      <div className="cards">
        <div className={classNameValue} role="button" tabIndex={0} onClick={() => setFighterId && playerTurn && setFighterId(avatar.id)} onKeyDown={() => setFighterId(avatar.id)}>
          <div>
            <img src={avatar.image.url} alt={avatar.name} className="heroAvatar" />
          </div>
          <div className="cardBody">
            <h1 className="heroName">{avatar.name}</h1>
            <p className="cardText">
              Strength :
              {' '}
              {avatar.powerstats.strength}
              <br />
              <p className={`durability ${durabilityClass()}`}>
                Durability :
                {' '}
                {fighterHp ?? avatar.powerstats.durability}
              </p>
              <meter
                min="0"
                max={avatar.powerstats.durability}
                low={avatar.powerstats.durability * 0.25}
                high={avatar.powerstats.durability * 0.75}
                optimum={avatar.powerstats.durability}
                value={fighterHp ?? avatar.powerstats.durability}
              />
              <br />
              Power :
              {' '}
              {avatar.powerstats.power}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  avatar: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    powerstats: PropTypes.objectOf(PropTypes.string),
    image: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  fighterId: PropTypes.string,
  setFighterId: PropTypes.func,
  fighterHp: PropTypes.number,
  className: PropTypes.string,
  playerTurn: PropTypes.bool,
};

Card.defaultProps = {
  fighterId: undefined,
  setFighterId: undefined,
  fighterHp: undefined,
  className: undefined,
  playerTurn: undefined,
};

export default Card;
