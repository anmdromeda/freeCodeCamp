/*

Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number.

*/

function isSafeNumber(value) {
  return typeof value === "number" && !Number.isNaN(Number(value));
}

function sumOfSquares(n) {
  const MAX_NUMBER = 1000;
  const MIN_NUMBER = 1;

  if (!isSafeNumber(n) || n > MAX_NUMBER || n < MIN_NUMBER) {
    return 0;
  }

  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += Math.pow(i, 2);
  }

  return result;
}
