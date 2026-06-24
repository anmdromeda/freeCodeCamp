/*

Given a string of words, return a new string with the words in reverse order. 
For example, the first word should be at the end of the returned string, 
and the last word should be at the beginning of the returned string.

- In the given string, words can be separated by one or more spaces.
- The returned string should only have one space between words.

*/

function reverseSentence(sentence) {
  if (typeof sentence !== "string" || !sentence.trim()) {
    return "";
  }
  const words = sentence.trim().split(/\s+/g);
  return words.reverse().join(" ");
}
