import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Modal.css';

function Modal({
  heroList, heroFighterId, setHeroFighterId, show, setShow,
}) {
  return (
    <div className={show ? 'heroSide' : 'hide'}>
      <button type="button" onClick={() => setShow(false)}>X</button>
      {heroList.map((hero) => (
        <Card
          key={hero.id}
          avatar={hero}
          fighterId={heroFighterId}
          setFighterId={setHeroFighterId}
        />
      ))}
    </div>
  );
}

Modal.propTypes = {
  heroList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      powerstats: PropTypes.objectOf(PropTypes.string),
      image: PropTypes.objectOf(PropTypes.string),
    }),
  ).isRequired,
  heroFighterId: PropTypes.string.isRequired,
  setHeroFighterId: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default Modal;
