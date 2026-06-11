/*

Given two strings representing your army and an opposing army, each character from your army battles
the character at the same position from the opposing army using the following rules:

- Characters a-z have a strength of 1-26, respectively.
- Characters A-Z have a strength of 27-52, respectively.
- Digits 0-9 have a strength of their face value.
- All other characters have a value of zero.
- Each character can only fight one battle.
- For each battle, the stronger character wins. The army with more victories, wins the war. Return the following values:

- "Opponent retreated" if your army has more characters than the opposing army.
- "We retreated" if the opposing army has more characters than yours.
- "We won" if your army won more battles.
- "We lost" if the opposing army won more battles.
- "It was a tie" if both armies won the same number of battles.

*/

function isValidString(value) {
  return typeof value === "string";
}

/**
 *
 * @param {string} myArmy
 * @param {string} opposingArmy
 * @returns {null | string}
 */
function evaluateArmiesSize(myArmy, opposingArmy) {
  if (myArmy.length === opposingArmy.length) {
    return null;
  }

  return myArmy.length > opposingArmy.length ? "Opponent retreated" : "We retreated";
}

/**
 *
 * @param {string} character
 * @returns {number}
 */
function getCharacterStrength(char) {
  if (char >= "0" && char <= "9") return parseInt(char);
  if (char >= "a" && char <= "z") return char.charCodeAt(0) - 96;
  if (char >= "A" && char <= "Z") return char.charCodeAt(0) - 65 + 27;
  return 0;
}

/**
 *
 * @param {string} myArmy
 * @param {string} opposingArmy
 * @returns {string}
 */
function evaluateArmiesCharacters(myArmy, opposingArmy) {
  let score = 0;

  for (let index = 0; index < myArmy.length; index++) {
    const myArmyCharacter = getCharacterStrength(myArmy[index]);
    const opposingArmyCharacter = getCharacterStrength(opposingArmy[index]);
    if (myArmyCharacter > opposingArmyCharacter) score += 1;
    if (myArmyCharacter < opposingArmyCharacter) score -= 1;
  }

  if (score === 0) {
    return "It was a tie";
  }

  return score < 0 ? "We lost" : "We won";
}

/**
 *
 * @param {string} myArmy
 * @param {string} opposingArmy
 * @returns {string}
 */
function battle(myArmy, opposingArmy) {
  if (!isValidString(myArmy) || !isValidString(opposingArmy)) {
    return null;
  }

  return evaluateArmiesSize(myArmy, opposingArmy) ?? evaluateArmiesCharacters(myArmy, opposingArmy);
}
