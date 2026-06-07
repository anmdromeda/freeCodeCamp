/*

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. 
When starting with 0 and 1, the first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

Given an array containing the first two numbers of a Fibonacci sequence, and an integer representing 
the length of the sequence, return an array containing the sequence of the given length.

- Your function should handle sequences of any length greater than or equal to zero.
- If the length is zero, return an empty array.
- Note that the starting numbers are part of the sequence.

*/

function fibonacciSequence(startSequence, length) {
  if (
    !Array.isArray(startSequence) ||
    startSequence.length === 0 ||
    length === 0 ||
    (typeof length !== "number" && Number.isNaN(length))
  ) {
    return [];
  }

  if (length === 1) {
    return [startSequence[0]];
  }

  if (length === 2) {
    return [...startSequence];
  }

  const finalSequence = [...startSequence];

  for (let index = startSequence.length - 1; index < length - 1; index++) {
    const [a, b] = finalSequence.slice(-2);
    finalSequence.push(a + b);
  }

  return finalSequence;
}

const result = fibonacciSequence([0, 1], 0);
console.log();
