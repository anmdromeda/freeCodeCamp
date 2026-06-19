/*

Given a string, return a new version of the string where each vowel is duplicated 
one more time than the previous vowel you encountered. For instance, the first vowel 
in the sentence should remain unchanged. The second vowel should appear twice in a row. 
The third vowel should appear three times in a row, and so on.

- The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
- The original vowel should keeps its case.
- Repeated vowels should be lowercase.
- All non-vowel characters should keep their original case.

*/

const VOWELS = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

function isVowel(letter) {
  return VOWELS.has(letter);
}

function repeatVowels(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }

  let result = "";
  let multiplier = 0;

  for (const letter of str) {
    result += letter;

    if (isVowel(letter)) {
      result += letter.repeat(multiplier).toLowerCase();
      multiplier += 1;
    }
  }

  return result;
}
