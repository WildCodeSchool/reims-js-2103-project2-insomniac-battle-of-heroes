const tirage = (taille, maxValue = 730) => {
  const arr = new Array(taille).fill(1);
  const resultat = arr.map((randomValue) => randomValue * Math
    .floor(Math.random() * maxValue) + 1);
  return resultat;
};

export default tirage;
