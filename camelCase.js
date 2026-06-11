/*
Given a string, return its camel case version using the following rules:

- Words in the string argument are separated by one or more characters from 
  the following set: space ( ), dash (-), or underscore (_). Treat any sequence of these as a word break.
- The first word should be all lowercase.
- Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
- All spaces and separators should be removed.

*/

function isLetter(value) {
  return value.charCodeAt() > 96 && value.charCodeAt() < 123;
}

function toCamelCase(s) {
  if (typeof s !== "string" || s.length === 0) {
    return "";
  }

  const normalized = s.toLowerCase();

  let camelCased = "";

  for (let index = 0; index < s.length; index++) {
    const digit = normalized[index];
    const shouldBeCapitalized = normalized[index - 1] ? !isLetter(normalized[index - 1]) : false;

    if (isLetter(digit)) {
      camelCased += shouldBeCapitalized ? digit.toUpperCase() : digit;
    }
  }

  return camelCased;
}
