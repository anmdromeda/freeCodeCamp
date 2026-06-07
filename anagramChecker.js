/*

Given two strings, determine if they are anagrams of each other 
(contain the same characters in any order).

Ignore casing and white space.

*/

function areAnagrams(str1, str2) {
  if (!isValidString(str1) || !isValidString(str2) || str1.length !== str2.length) {
    return false;
  }

  const lettersCount1 = getLettersCount(str1);
  const lettersCount2 = getLettersCount(str2);

  for (const key in lettersCount1) {
    if (!Object.hasOwn(lettersCount2, key)) {
      return false;
    }

    if (lettersCount1[key] !== lettersCount2[key]) {
      return false;
    }
  }

  return true;
}

function normalizeString(str) {
  if (!isValidString(str)) {
    return "";
  }

  return str.toLowerCase().replace(/\s+/g, "");
}

function isValidString(str) {
  return typeof str === "string";
}

function getLettersCount(word) {
  if (!isValidString(word)) {
    return {};
  }

  const normalizedWord = normalizeString(word);

  const result = {};

  for (let index = 0; index < normalizedWord.length; index++) {
    const letter = normalizedWord[index];
    result[letter] = result[letter] !== undefined ? result[letter] + 1 : 1;
  }

  return result;
}
