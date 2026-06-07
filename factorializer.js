/*

Given an integer from zero to 20, return the factorial of that number. 
The factorial of a number is the product of all the numbers between 1 and the given number.

The factorial of zero is 1.

*/

function isSafeNumber(value) {
  return typeof value === "number" && !Number.isNaN(Number(value));
}

function factorial(n) {
  if (!isSafeNumber(n) || n < 0) {
    return 0;
  }

  if (n <= 1) {
    return 1;
  }

  let acc = 1;
  let index = 1;

  while (index <= n) {
    acc = acc * index++;
  }

  return acc;
}

const result = factorial(20);
console;
