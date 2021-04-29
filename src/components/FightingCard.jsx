import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Card.css';

function FightingCard({
  avatar,
  avatarList, setAvatarList, setFighterStr, fighterHp, setFighterHp, fighterId, setFighterId,
}) {
  useEffect(() => {
    setFighterStr(avatar.powerstats.strength);
    setFighterHp(avatar.powerstats.durability);
  }, [fighterId]);

  useEffect(() => {
    if (fighterHp <= 0) {
      setAvatarList(avatarList.filter((card) => card.id !== fighterId));
      setFighterId();
      setFighterHp();
    }
  }, [fighterHp]);

  return (
    <>
      <Card
        className="test1"
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
  avatarList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      powerstats: PropTypes.objectOf(PropTypes.string),
      image: PropTypes.objectOf(PropTypes.string),
    }),
  ).isRequired,
  setAvatarList: PropTypes.func.isRequired,
  setFighterStr: PropTypes.func.isRequired,
  fighterHp: PropTypes.string.isRequired,
  setFighterHp: PropTypes.func.isRequired,
  fighterId: PropTypes.string.isRequired,
  setFighterId: PropTypes.func.isRequired,
};

export default FightingCard;
