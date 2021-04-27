import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Card.css';

function FightingCard({ avatar, player }) {
  return (
    <>
      {player && <button type="button" onClick={() => alert('Geronimo!')}>Fight</button>}
      <Card
        avatar={avatar}
      />
    </>
  );
}

FightingCard.propTypes = {
  avatar: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    powerstats: PropTypes.objectOf(PropTypes.string),
    image: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  player: PropTypes.bool,
};

FightingCard.defaultProps = {
  player: undefined,
};

export default FightingCard;
