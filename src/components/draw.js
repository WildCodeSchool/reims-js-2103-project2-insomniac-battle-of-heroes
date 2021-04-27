const draw = (howManyHeroes, maxValue = 100) => {
  const array = new Array(maxValue).fill(1);
  const excludeCards = [9, 16, 19, 21, 22, 27, 33, 46, 47, 50, 51, 54, 55, 59, 62, 64, 65, 67, 74,
    77, 85, 86, 89, 90, 91, 94];
  const randomArray = array.map((randomValue) => randomValue * Math
    .floor(Math.random() * (maxValue - 1)) + 1);
  const filteredArray = randomArray.filter((card) => !excludeCards.includes(card));
  const slicedArray = filteredArray.slice((filteredArray.length - howManyHeroes));
  return slicedArray;
};

export default draw;
