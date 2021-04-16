const draw = (howManyHeroes, maxValue = 730) => {
  const arr = new Array(howManyHeroes).fill(1);
  const result = arr.map((randomValue) => randomValue * Math
    .floor(Math.random() * maxValue) + 1);
  return result;
};

export default draw;
