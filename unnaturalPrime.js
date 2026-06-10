/*

Given an integer, determine if that number is a prime number or a negative prime number.

A prime number is a positive integer greater than 1 that is only divisible by 1 and itself.
A negative prime number is the negative version of a positive prime number.
1 and 0 are not considered prime numbers.


3 3
1 -


4 2
2 2
1

6 2
3 3
1

9 3
3 3
1



*/

function isUnnaturalPrime(n) {
  const effectiveNum = Math.abs(n);

  if (
    typeof n !== "number" ||
    !Number.isFinite(effectiveNum) ||
    Number.isNaN(effectiveNum) ||
    effectiveNum === 1 ||
    effectiveNum === 0
  ) {
    return false;
  }

  if (effectiveNum === 2) {
    return true;
  }

  if (effectiveNum % 2 === 0) {
    return false;
  }

  let result = n;
  let count = 1;

  while (count <= n) {
    result = n / count;

    if (Number.isInteger(result) && count !== n && count !== 1) {
      return false;
    }

    count += 1;
  }

  return true;
}
