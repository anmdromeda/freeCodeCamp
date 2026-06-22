/*

Given a string representing a Roman numeral, return its integer value.

Roman numerals consist of the following symbols and values:

Symbol	Value
I	      1
V	      5
X	      10
L	      50
C	      100
D	      500
M	      1000
Numerals are read left to right. If a smaller numeral appears before a larger one, the value is subtracted. Otherwise, values are added.

*/

const RomanSymbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function parseRomanNumeral(numeral) {
  if (typeof numeral !== "string" || numeral.trim().length === 0) {
    return 0;
  }

  let total = 0;

  for (let i = 0; i < numeral.length; i++) {
    const currentVal = RomanSymbols[numeral[i]];
    const nextVal = RomanSymbols[numeral[i + 1]];

    if (!currentVal) {
      return 0;
    }

    total = nextVal && nextVal > currentVal ? total - currentVal : total + currentVal;
  }

  return total;
}
