import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Card.css';

function FightingCard({
  avatar, playerHp, setPlayerHp, setHasPicked,
  avatarList, setAvatarList, setFighterStr, fighterHp, setFighterHp, fighterId, setFighterId,
}) {
  useEffect(() => {
    setFighterStr(parseInt(avatar.powerstats.strength, 10));
    setFighterHp(parseInt(avatar.powerstats.durability, 10));
    setHasPicked(true);
  }, [fighterId]);

  useEffect(() => {
    if (fighterHp <= 0) {
      setAvatarList(avatarList.filter((card) => card.id !== fighterId));
      setPlayerHp(playerHp - avatar.powerstats.power);
      setFighterHp();
      setFighterId();
    }
  }, [fighterHp]);

  return (
    <>
      <Card
        className="fightingCard"
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
  fighterHp: PropTypes.number,
  setFighterHp: PropTypes.func.isRequired,
  fighterId: PropTypes.string.isRequired,
  setFighterId: PropTypes.func.isRequired,
  playerHp: PropTypes.number.isRequired,
  setPlayerHp: PropTypes.func.isRequired,
  setHasPicked: PropTypes.func,
};

FightingCard.defaultProps = {
  fighterHp: undefined,
  setHasPicked: undefined,
};

export default FightingCard;
