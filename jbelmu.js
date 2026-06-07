/*

Given a string, return a jumbled version of that string where each word is transformed using the following constraints:

The first and last letters of the words remain in place
All letters between the first and last letter are sorted alphabetically.
The input strings will contain no punctuation, and will be entirely lowercase.

*/

function jbelmu(text = "") {
  if (typeof text !== "string") {
    return "";
  }

  const words = text.split(" ").map(jumbleWord);

  return words.join(" ");
}

function jumbleWord(word = "") {
  if (word.length <= 3) {
    return word;
  }

  const first = word[0];
  const last = word[word.length - 1];

  const middle = word.slice(1, -1).split("").sort().join("");

  return `${first}${middle}${last}`;
}
