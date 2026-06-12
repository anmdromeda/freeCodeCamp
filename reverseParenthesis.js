/*
Given a string that contains properly nested parentheses, return the decoded version of the string using the following rules:

- All characters inside each pair of parentheses should be reversed.
- Parentheses should be removed from the final result.
- If parentheses are nested, the innermost pair should be reversed first, 
  and then its result should be included in the reversal of the outer pair.
- Assume all parentheses are evenly balanced and correctly nested.

*/

function getTotalParentheses(str) {
  let count = 0;

  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (element === "(") count += 1;
  }

  return count;
}

function reverseDeeperParenthesesContent(str) {
  let i = 0;
  let opId = null;
  let cpId = null;
  let toReverseIndexes = [];

  // Find parentheses content
  while (i < str.length) {
    const char = str[i];

    if (char === ")") {
      cpId = i;
      break;
    }

    if (opId !== null) toReverseIndexes.push(i);

    if (char === "(") {
      opId = i;
      toReverseIndexes = [];
    }

    i += 1;
  }

  let result = "";
  let reverseCharIndex = toReverseIndexes.length;

  for (let j = 0; j < str.length; j++) {
    if (opId === j || cpId === j) continue;

    // Should reverse parentheses content
    if (j >= toReverseIndexes[0] && j <= toReverseIndexes[toReverseIndexes.length - 1]) {
      result += str[toReverseIndexes[reverseCharIndex - 1]];
      reverseCharIndex -= 1;
    } else {
      result += str[j];
    }
  }

  return result;
}

function decode(s) {
  if (typeof s !== "string") {
    return "";
  }

  const totalParentheses = getTotalParentheses(s);

  let steps = 0;
  let result = s;

  while (steps < totalParentheses) {
    result = reverseDeeperParenthesesContent(result);
    steps += 1;
  }

  return result;
}
