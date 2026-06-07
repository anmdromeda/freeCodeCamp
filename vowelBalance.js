/*
 
Given a string, determine whether the number of vowels 
in the first half of the string is equal to the number 
of vowels in the second half.

- The string can contain any characters.
- The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
- If there's an odd number of characters in the string, ignore the center character.

 
*/

function isBalanced(s) {
  const [firstHalf, secondHalf] = splitStringInHalf(normalizeString(s));
  return getVowelsCount(firstHalf) === getVowelsCount(secondHalf);
}

function normalizeString(str = "") {
  return str.trim().toLowerCase();
}

function getVowelsCount(str = "") {
  if (str.length === 0) {
    return 0;
  }

  const vowelsRegexp = /[aeiou]/gi;

  return str.match(vowelsRegexp)?.length || 0;
}

function splitStringInHalf(str = "") {
  const len = str.length;

  if (str.length === 0) {
    return ["", ""];
  }

  const isOddLen = (len / 2) % 2 !== 0;
  const halfLength = isOddLen ? (len - 1) / 2 : len / 2;

  const firstHalf = str.slice(0, halfLength);
  const secondHalf = str.slice(isOddLen ? halfLength + 1 : halfLength);

  return [firstHalf, secondHalf];
}
