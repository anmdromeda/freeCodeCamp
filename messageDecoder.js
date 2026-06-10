/*

Given a secret message string, and an integer representing the number of letters
 that were used to shift the message to encode it, return the decoded string.

- A positive number means the message was shifted forward in the alphabet.
- A negative number means the message was shifted backward in the alphabet.
- Case matters, decoded characters should retain the case of their encoded counterparts.
- Non-alphabetical characters should not get decoded.

*/

function isValidNumber(value) {
  return typeof value == "number" && !Number.isNaN(value) && Number.isFinite(value);
}

/**
 *
 * @param {string} letter
 * @returns {boolean}
 */
function isUpperCased(letter) {
  if (typeof letter !== "string") {
    return false;
  }

  return letter === letter.toUpperCase();
}

class Alphabet {
  constructor() {
    /**
     * @private
     */
    this.__value__ = "abcdefghijklmnopqrstuvwxyz";
  }

  /**
   *
   * @param {string} letter
   * @returns {number}
   */
  findIndex(letter) {
    return this.getValue().indexOf(letter.toLowerCase());
  }

  /**
   *
   * @param {string} char
   * @returns {boolean}
   */
  isAlphabetical(char) {
    return char.match(/[a-z]/i);
  }

  /**
   *
   * @returns {number}
   */
  getSize() {
    return this.__value__.length;
  }

  /**
   *
   * @returns {string[]}
   */
  getValue() {
    return this.__value__;
  }
}

const alphabetManager = new Alphabet();

/**
 *
 * @param {{total: number, currentPosition: number, shift: number}} params
 * @returns {number} currentPosition after shift or -1 if not valid
 */
function shiftIndex({ total, currentPosition, shift }) {
  if (currentPosition < 0) {
    return -1;
  }

  if (shift === 0 || shift % total === 0) {
    return currentPosition;
  }

  const steps = shift % total;

  return (currentPosition - steps + total) % total;
}

/**
 *
 * @param {string} letter
 * @param {number} shift
 * @returns {string | null}
 */
function matchAlphabetShiftPosition(letter, shift) {
  const alphabetSize = alphabetManager.getSize();

  if (shift === 0 || Math.abs(shift) % alphabetSize === 0) {
    return letter;
  }

  const alphabetLetters = alphabetManager.getValue();

  const targetPosition = shiftIndex({
    total: alphabetSize,
    currentPosition: alphabetManager.findIndex(letter),
    shift,
  });

  return alphabetLetters[targetPosition] ? alphabetLetters[targetPosition] : null;
}

function decode(message, shift) {
  if (typeof message !== "string" || !isValidNumber(shift)) {
    return message;
  }

  let result = "";

  for (let index = 0; index < message.length; index++) {
    const letter = message[index];
    let characterResult = letter;

    if (alphabetManager.isAlphabetical(letter)) {
      const isUppercasedCharacter = isUpperCased(letter);
      const matched = matchAlphabetShiftPosition(letter, shift) || "";
      characterResult = isUppercasedCharacter ? matched.toUpperCase() : matched;
    }

    result += characterResult;
  }

  return result;
}

const result = decode("X", 4);
console.log;
