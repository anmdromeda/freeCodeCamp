/*

Given an integer greater than 1, return its prime factorization as an array of numbers in ascending order.

A prime factorization is the set of prime numbers that multiply together to produce the given integer. 
Each number has exactly one set. For example, the prime factorization of 20 is [2, 2, 5] because 2 * 2 * 5 = 20.

If the given integer is itself prime, return it in a single-element array.

*/

function primeFactorization(n) {
  if (typeof n !== "number" || n < 2) {
    return [];
  }

  let divisor = 2;
  let result = n;
  const primeNumbers = [];

  while (divisor * divisor <= result) {
    if (result % divisor === 0) {
      primeNumbers.push(divisor);
      result = result / divisor;
    } else {
      divisor += 1;
    }
  }

  if (result > 1) {
    primeNumbers.push(result);
  }

  return primeNumbers;
}
