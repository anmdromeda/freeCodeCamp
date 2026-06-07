/*

Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.

The string may contain integers, and uppercase or lowercase characters.
The check should be case-insensitive.
The base can be any number 2-36.
A number is valid if every character is a valid digit in the given base.
Example of valid digits for bases:
Base 2: 0-1
Base 8: 0-7
Base 10: 0-9
Base 16: 0-9 and A-F
Base 36: 0-9 and A-Z

*/

function isValidNumber(numbers, base) {
  if (numbers.length === 0) {
    return false;
  }

  const BASE_NUMBERS = "0123456789abcdefghijkmlnopqrstuvwxyz";
  const BASE_DIGITS = BASE_NUMBERS.slice(0, base);

  const normalizedNumbers = numbers.toLowerCase();

  const regexp = new RegExp(`[${BASE_DIGITS}]`);

  for (const digit of normalizedNumbers) {
    if (digit.match(regexp) === null) {
      return false;
    }
  }

  return true;
}
