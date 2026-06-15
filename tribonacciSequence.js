/**
The Tribonacci sequence is a series of numbers where each number is the sum of the three preceding ones. 
When starting with 0, 0 and 1, the first 10 numbers in the sequence are 0, 0, 1, 1, 2, 4, 7, 13, 24, 44.

Given an array containing the first three numbers of a Tribonacci sequence, and an integer 
representing the length of the sequence, return an array containing the sequence of the given length.

- Your function should handle sequences of any length greater than or equal to zero.
- If the length is zero, return an empty array.
- Note that the starting numbers are part of the sequence.

@param {number[]} startSequence
@param {number} length 
*/
function tribonacciSequence(startSequence, length) {
  if (startSequence.length === 0 || length === 0) {
    return [];
  }

  if (length <= 3) {
    return startSequence.slice(0, length);
  }

  const sequence = [...startSequence];

  for (let i = startSequence.length - 1; i < length - 1; i++) {
    sequence.push(sequence[i] + sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

console.log(tribonacciSequence([0, 0, 1], 20));
