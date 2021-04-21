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
      </div>
    </>
  );
}

Card.propTypes = {
  avatar: PropTypes.element.isRequired,
};

export default Card;
