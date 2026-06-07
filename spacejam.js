/*

Given a string, remove all spaces from the string, insert two spaces between every character, convert all alphabetical letters to uppercase, and return the result.

Non-alphabetical characters should remain unchanged (except for spaces).

*/

function spaceJam(str = "") {
  if (typeof str !== "string") {
    return "";
  }

  return str.replace(/\s+/g, "").toUpperCase().split("").join("  ");
}
