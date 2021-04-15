const tirage = (taille) => {
  const arr = new Array(taille).fill(1);
  const resultat = arr.map((randomValue) => randomValue * Math
    .floor(Math.random() * 730) + 1);
  return resultat;
};
export default tirage;
