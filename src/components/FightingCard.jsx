import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Card.css';

function FightingCard({
  avatar, setFighterStr, fighterHp, setFighterHp,
}) {
  useEffect(() => {
    setFighterStr(avatar.powerstats.strength);
    setFighterHp(avatar.powerstats.durability);
  }, []);
  return (
    <>
      <button type="button" onClick={() => alert('Geronimo!')}>Fight</button>
      <Card
        avatar={avatar}
        fighterHp={fighterHp}
        setFighterHp={setFighterHp}
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
  setFighterStr: PropTypes.func,
  fighterHp: PropTypes.string,
  setFighterHp: PropTypes.func,
};

FightingCard.defaultProps = {
  setFighterStr: undefined,
  fighterHp: undefined,
  setFighterHp: undefined,
};

export default FightingCard;
