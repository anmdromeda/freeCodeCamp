/*

Given an integer between 1 and 10,000, return a count 
of how many numbers from 1 up to that integer whose square contains at least one digit 3.

*/

function isSafeNumber(value) {
  return typeof value === "number" && !Number.isNaN(Number(value));
}

/**
 *
 * @param {number} value
 * @returns {boolean}
 */
function containsAtLeastOneDigit3(value) {
  if (!isSafeNumber(value)) {
    return false;
  }

  let n = Math.floor(value);

  while (n > 0) {
    if (n % 10 === 3) {
      return true;
    }

    n = Math.floor(n / 10);
  }

  return false;
}

/**
 *
 * @param {number} num
 * @returns {number}
 */
function squaresWithThree(num) {
  const MAX_NUMBER = 10000;
  const MIN_NUMBER = 1;

  if (!isSafeNumber(num) || num > MAX_NUMBER || num < MIN_NUMBER) {
    return 0;
  }

  let count = 0;

  for (let i = 1; i <= num; i++) {
    const number = Math.pow(i, 2);

    if (containsAtLeastOneDigit3(number)) {
      count += 1;
    }
  }

  return count;
}

const result = squaresWithThree(100);
console;
