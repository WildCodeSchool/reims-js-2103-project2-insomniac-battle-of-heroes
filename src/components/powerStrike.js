function powerStrike(fighterStr) {
  const randomMultiplicator = Math.random();
  let strBonus;
  if (randomMultiplicator > 0.85) {
    strBonus = fighterStr * 3;
    return strBonus;
  } if (randomMultiplicator > 0.5) {
    strBonus = fighterStr * 2;
    return strBonus;
  } if (randomMultiplicator > 0.15) {
    strBonus = fighterStr * 1;
    return strBonus;
  }
  strBonus = 0;
  return strBonus;
}

export default powerStrike;
