/**
Given a named CSS color string, generate a random hexadecimal (hex) 
color code that is dominant in the given color.

- The function should handle "red", "green", or "blue" as an input argument.
- If the input is not one of those, the function should return "Invalid color".
- The function should return a random six-character hex color code 
  where the input color value is greater than any of the others.
- Example of valid outputs for a given input:


Input	Output
"red"	"FF0000"
"green"	"00FF00"
"blue"	"0000FF"

@param {'red' | 'green' | 'blue'} color 
*/
function generateHex(color) {
  const baseHex = {
    red: ["F", "F", null, null, null, null],
    green: [null, null, "F", "F", null, null],
    blue: [null, null, null, null, "F", "F"],
  };

  if (!Object.hasOwn(baseHex, color)) {
    return "Invalid color";
  }

  for (let i = 0; i < baseHex[color].length; i++) {
    if (baseHex[color][i] === null) {
      baseHex[color][i] = generateRandomHexValue(14);
    }
  }

  return baseHex[color].join("");
}

function generateRandomHexValue(base = 16) {
  if (typeof base !== "number") {
    return 0;
  }

  let effectiveBase = base;

  if (base < 0) {
    effectiveBase = 0;
  }

  if (base > 16) {
    effectiveBase = 16;
  }

  const randomNum = Math.round(Math.random() * effectiveBase);

  const hexMap = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };

  return Object.hasOwn(hexMap, randomNum) ? hexMap[randomNum] : randomNum;
}
