import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Modal.css';

function Modal({
  avatarList, avatarFighterId, setAvatarFighterId, show, setShow, playerTurn,
}) {
  return (
    <div className={show ? 'hand' : 'hide'}>
      <button className="closeButton" type="button" onClick={() => setShow(false)}>X</button>
      {avatarList.map((hero) => (
        <Card
          key={hero.id}
          avatar={hero}
          fighterId={avatarFighterId}
          setFighterId={setAvatarFighterId}
          playerTurn={playerTurn}
        />
      ))}
    </div>
  );
}

Modal.propTypes = {
  avatarList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      powerstats: PropTypes.objectOf(PropTypes.string),
      image: PropTypes.objectOf(PropTypes.string),
    }),
  ).isRequired,
  avatarFighterId: PropTypes.string.isRequired,
  setAvatarFighterId: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  playerTurn: PropTypes.bool,
};

Modal.defaultProps = {
  playerTurn: false,
};

export default Modal;
