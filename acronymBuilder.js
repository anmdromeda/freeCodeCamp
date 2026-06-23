/*

Given a string containing one or more words, return an acronym of the words using the following constraints:

The acronym should consist of the first letter of each word capitalized, unless otherwise noted.
The acronym should ignore the first letter of these words unless they are the first word of the given string: a, for, an, and, by, and of.
The acronym letters should be returned in the order they are given.
The acronym should not contain any spaces.

*/

function buildAcronym(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }

  const reserved = new Set(["a", "for", "an", "and", "by", "of"]);
  const words = str.toLowerCase().trim().split(/\s+/);

  let acronym = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const isReserved = reserved.has(word);
    if (i === 0 || !isReserved) acronym += word[0];
  }

  return acronym.toUpperCase();
}
