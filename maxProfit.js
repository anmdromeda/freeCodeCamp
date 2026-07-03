/*

Given an array of daily stock prices and a budget (in dollars), calculate the maximum profit you could make by buying and selling the stock over the given period.

You may only sell after you buy.
You can only buy whole shares.
Return the maximum possible profit as a string, rounded down to the nearest cent and formatted to two decimal places.

*/

function roundTwoDecimalPlace(num) {
  return Intl.NumberFormat("en-EN", {
    style: "decimal",
    minimumFractionDigits: 2,
    roundingMode: "floor",
    maximumFractionDigits: 2,
  }).format(num);
}

function calculateProfit({ minPrice, maxPrice, budget }) {
  const stocks = Math.floor(budget / minPrice);
  const expended = minPrice * Math.floor(budget / minPrice);
  const sellValue = stocks * maxPrice;

  return sellValue - budget + (budget - expended);
}

function getMaxProfit(prices, budget) {
  if (!Array.isArray(prices) || typeof budget !== "number") {
    throw new Error("Invalid calculation params");
  }

  const profits = [];

  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      const profit = calculateProfit({ minPrice: prices[i], maxPrice: prices[j], budget });
      if (profit > 0) profits.push(profit);
    }
  }

  const maxProfit = profits.length ? Math.max(...profits) : 0;

  return roundTwoDecimalPlace(maxProfit);
}

console.log(getMaxProfit([54.4, 51.22, 53.99, 50.28, 53.01, 52.84], 200));
