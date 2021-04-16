import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({ avatar }) {
  return (
    <>
      <div>
        <div className="card">
          <div>
            <img src={avatar.image.url} alt={avatar.name} className="heroAvatar" />
          </div>
          <div className="cardBody">
            <h1 className="heroName">{avatar.name}</h1>
            <p className="cardText">
              Intelligence :
              {' '}
              {avatar.powerstats.intelligence}
              <br />
              Strength :
              {' '}
              {avatar.powerstats.strength}
              <br />
              Speed :
              {' '}
              {avatar.powerstats.speed}
              <br />
              Durability :
              {' '}
              {avatar.powerstats.durability}
              <br />
              Power :
              {' '}
              {avatar.powerstats.power}
              <br />
              Combat :
              {' '}
              {avatar.powerstats.combat}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  avatar: PropTypes.element.isRequired,
};

export default Card;
