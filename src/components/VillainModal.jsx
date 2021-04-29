import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Modal.css';

function Modal({
  villainList, villainFighterId, setVillainFighterId, show, setShow,
}) {
  return (
    <div className={show ? 'villainSide' : 'hide'}>
      <button type="button" onClick={() => setShow(false)}>X</button>
      {villainList.map((villain) => (
        <Card
          key={villain.id}
          avatar={villain}
          fighterId={villainFighterId}
          setFighterId={setVillainFighterId}
        />
      ))}
    </div>
  );
}

Modal.propTypes = {
  villainList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      powerstats: PropTypes.objectOf(PropTypes.string),
      image: PropTypes.objectOf(PropTypes.string),
    }),
  ).isRequired,
  villainFighterId: PropTypes.string.isRequired,
  setVillainFighterId: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default Modal;
