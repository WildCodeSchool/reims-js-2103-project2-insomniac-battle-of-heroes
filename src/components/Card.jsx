import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({ avatar, fighterId, setFighterId }) {
  return (
    <>
      <div className={avatar.id === fighterId ? 'card clicked' : 'card'} role="button" tabIndex={0} onClick={() => setFighterId(avatar.id)} onKeyDown={() => setFighterId(avatar.id)}>
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
            Durability :
            {' '}
            {avatar.powerstats.durability}
            <br />
            Power :
            {' '}
            {avatar.powerstats.power}
          </p>
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
  fighterId: PropTypes.string.isRequired,
  setFighterId: PropTypes.func.isRequired,
};

export default Card;
