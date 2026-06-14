/*
Given an array of integers representing the price of different laptops, and an integer representing your budget, return:
- The second most expensive laptop if it is within your budget, or
  The most expensive laptop that is within your budget, or
- 0 if no laptops are within your budget.
- Duplicate prices should be ignored.

*/

function getLaptopCost(laptops, budget) {
  if (!Array.isArray(laptops) || typeof budget !== "number") {
    return null;
  }

  if (budget <= 0 || laptops.length === 0) {
    return 0;
  }

  const affordablePrices = Array.from(new Set([...laptops]));

  if (affordablePrices.length === 1) {
    return affordablePrices[0];
  }

  // Order higher to lower
  affordablePrices.sort((a, b) => b - a);

  let i = 0;

  while (i < affordablePrices.length) {
    if (i > 0 && affordablePrices[i] <= budget) {
      return affordablePrices[i];
    }

    i += 1;
  }

  return 0;
}
