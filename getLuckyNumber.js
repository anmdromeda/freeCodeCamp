/*

Given a string of a person's first and last name, calculate their lucky number using the following rules:

First and last names are separated by a space
Find the vowel and consonant count for each name
Multiply the smaller vowel and consonant counts by each other and then by the length of the smaller name
Do the same for the two larger counts and the larger name
Subtract the smaller value from the larger one to get their lucky number
If the final value is zero (0), return 13.

*/

const vowelsSet = new Set("aeiou");

function getWordVowelsAndConsonats(word = "") {
  let vowels = 0;
  let consonants = 0;

  for (const char of word) {
    if (vowelsSet.has(char)) vowels += 1;
    else consonants += 1;
  }

  return { vowels, consonants };
}

function getLuckyNumber(name) {
  if (typeof name !== "string" || name.length === 0) {
    throw new Error("Invalid name input");
  }

  const parts = name.split(/\s+/);

  if (parts.length !== 2) {
    throw new Error("Invalid name input");
  }

  const [n1, n2] = parts.map((word) => word.trim().toLowerCase());

  const n1Vars = getWordVowelsAndConsonats(n1);
  const n2Vars = getWordVowelsAndConsonats(n2);

  // 1. Find vars
  const minNameLen = Math.min(n1.length, n2.length);
  const maxNameLen = Math.max(n1.length, n2.length);

  const maxVowelCount = Math.max(n1Vars.vowels, n2Vars.vowels);
  const minVowelCount = Math.min(n1Vars.vowels, n2Vars.vowels);

  const maxConsonatsCount = Math.max(n1Vars.consonants, n2Vars.consonants);
  const minConsonatsCount = Math.min(n1Vars.consonants, n2Vars.consonants);

  // 2. Multiply
  const smallerResult = minVowelCount * minConsonatsCount * minNameLen;
  const largerResult = maxVowelCount * maxConsonatsCount * maxNameLen;

  // 3. Result
  const luckyNumber = largerResult - smallerResult;

  return luckyNumber === 0 ? 13 : luckyNumber;
}
