/*

Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.

Here are some example outputs for a given input:

Input	Output
"rgb(255, 255, 255)"	"#ffffff"
"rgb(1, 2, 3)"	"#010203"
- Make any letters lowercase.
- Return a # followed by six characters. Don't use any shorthand values.

*/

function getHexLetter(n) {
  if (typeof n !== "number") {
    return null;
  }

  const hexMap = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };

  return Object.hasOwn(hexMap, n) ? hexMap[n] : n;
}

function extractRgbValues(str) {
  const match = str.match(/\d{1,3}/gi);
  return match === null ? [] : match.map(Number);
}

function calcHexValue(n) {
  const l = (n - (n % 16)) / 16;
  const r = n % 16;

  return [l, r];
}

function isValidRgbColor(color) {
  return typeof color === "string" && color.startsWith("rgb") && color.endsWith(")");
}

function rgbToHex(rgb) {
  if (!isValidRgbColor(rgb)) {
    return "Invalid rgb color";
  }

  const rgbValues = extractRgbValues(rgb);

  if (rgbValues.length !== 3 || rgbValues.some((n) => n < 0 || n > 255)) {
    return "Invalid rgb color";
  }

  for (let i = 0; i < rgbValues.length; i++) {
    const [l, r] = calcHexValue(rgbValues[i]);
    rgbValues[i] = `${getHexLetter(l)}${getHexLetter(r)}`;
  }

  const hexValues = rgbValues.join("").toLowerCase();

  return `#${hexValues}`;
}
