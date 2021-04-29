const draw = (howManyHeroes, maxValue = 100) => {
  const invalidCards = [
    9, 16, 19, 21, 22, 27,
    33, 46, 47, 50, 51, 54,
    55, 59, 62, 64, 65, 67,
    74, 77, 85, 86, 89, 90,
    91, 94,
  ];
  // list valid cards
  const validCards = [];
  for (let i = 1; i <= maxValue; i += 1) {
    if (!invalidCards.includes(i)) {
      validCards.push(i);
    }
  }
  // shuffle valid cards
  validCards.sort(() => Math.random() - 0.5);
  // slice first cards
  return validCards.slice(0, howManyHeroes);
};

export default draw;
