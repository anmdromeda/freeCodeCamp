/*

Given a word or sentence and a string of lowercase letters, 
determine if the word or sentence uses all the letters from the given set at least once and no other letters.

- Ignore non-alphabetical characters in the word or sentence.
- Ignore letter casing in the word or sentence.

*/

function normalize(str) {
  return str.toLowerCase().trim();
}

function isPangram(sentence, letters) {
  if (typeof sentence !== "string" || typeof letters !== "string") {
    return false;
  }

  const cleanSentence = normalize(sentence).match(/[a-z]/gi) || [];
  const sentenceSet = new Set(cleanSentence);
  const targetLettersSet = new Set(normalize(letters));

  if (sentenceSet.size !== targetLettersSet.size) {
    return false;
  }

  for (const letter of targetLettersSet) {
    if (!sentenceSet.has(letter)) return false;
  }

  return true;
}
