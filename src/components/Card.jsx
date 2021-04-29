import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({
  avatar, fighterId, setFighterId, fighterHp, className,
}) {
  const classNameValue = className ?? (avatar.id === fighterId ? 'card clicked' : 'card');
  return (
    <>
      <div className="cards">
        <div className={classNameValue} role="button" tabIndex={0} onClick={() => setFighterId && setFighterId(avatar.id)} onKeyDown={() => setFighterId(avatar.id)}>
          <div className="test">
            <img src={avatar.image.url} alt={avatar.name} className="heroAvatar" />
          </div>
          <div className="cardBody">
            <h1 className="heroName">{avatar.name}</h1>
            <p className="cardText">
              Strength :
              {' '}
              {avatar.powerstats.strength}
              <br />
              Durability :
              {' '}
              {fighterHp ?? avatar.powerstats.durability}
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
};

Card.defaultProps = {
  fighterId: undefined,
  setFighterId: undefined,
  fighterHp: undefined,
  className: undefined,
};

export default Card;
