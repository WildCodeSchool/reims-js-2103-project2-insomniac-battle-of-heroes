import React from 'react';
import PropTypes from 'prop-types';

function Card({ avatar }) {
  return (
    <>
      <img src={avatar.image.url} alt={avatar.name} className="heroAvatar" />
      <h1 className="heroName">{avatar.name}</h1>
      <p>
        intelligence :
        {' '}
        {avatar.powerstats.intelligence}
        <br />
        strength :
        {' '}
        {avatar.powerstats.strength}
        <br />
        speed :
        {' '}
        {avatar.powerstats.speed}
        <br />
        durability :
        {' '}
        {avatar.powerstats.durability}
        <br />
        power :
        {' '}
        {avatar.powerstats.power}
        <br />
        combat :
        {' '}
        {avatar.powerstats.combat}
      </p>
    </>
  );
}

Card.propTypes = {
  avatar: PropTypes.element.isRequired,
};

export default Card;
