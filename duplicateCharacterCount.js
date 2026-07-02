/*

Given two strings, return a count of characters from the second string that can be found in the first.

Duplicate characters in the second string are counted separately.

*/
function duplicateCharacterCount(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return 0;
  }

  const uniqueLetters = new Set(str1);
  let count = 0;

  for (const l of str2) {
    if (uniqueLetters.has(l)) count += 1;
  }

  return count;
}
