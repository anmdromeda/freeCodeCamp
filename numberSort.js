/*
Given a string of numbers separated by commas, return an array of the numbers sorted from smallest to largest.
*/
function sortNumbers(str = "") {
  if (typeof str !== "string") {
    return [];
  }

  const result = [];

  for (const n of str.split(",")) {
    if (isValidStrNumber(n)) result.push(Number(n));
  }

  result.sort((a, b) => a - b);

  return result;
}

function isValidStrNumber(value) {
  const trimmed = value.trim();
  return trimmed.length > 0 && !Number.isNaN(Number(trimmed));
}

console.log(sortNumbers("12,61,49,80,19,50,77,38"));
