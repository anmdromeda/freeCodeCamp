/*

Given a string, determine if all the characters in the string are unique.
- Uppercase and lowercase letters should be considered different characters.

*/

function allUnique(str) {
  if (typeof str !== "string") {
    return false;
  }

  if (str.length === 1) {
    return true;
  }

  const seen = new Set();

  for (const char of str) {
    if (seen.has(char)) return false;
    else seen.add(char);
  }

  return true;
}
