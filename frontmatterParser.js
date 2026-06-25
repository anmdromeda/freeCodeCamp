/*

Given a string representing a frontmatter block, parse it and return an object (JavaScript) or dictionary (Python) with the keys and values.

Frontmatter is wrapped in --- delimiters and contains key: value pairs within them, one per line. For example:

---
title: My Post
draft: false
views: 100
---
Should return:

{
  title: "My Post",
  draft: false,
  views: 100
}
Numbers, Booleans, and Strings should all be returned as their respective type.
The given string will have new lines separated with the newline character ("\n"). The above example would be given as: "---\ntitle: My Post\ndraft: false\nviews: 100\n---".

*/

const unknownCharactersRegex = /[\}\{\[\]]/;

function inferPairDataType(pair) {
  const dividerIndex = pair.indexOf(": ");

  if (dividerIndex === -1) {
    return [pair, null];
  }

  const key = pair.slice(0, dividerIndex).trim();
  const value = pair.slice(dividerIndex + 2).trim();

  if (unknownCharactersRegex.test(value)) {
    return [key, null];
  }

  if (value.trim().length > 0 && !Number.isNaN(Number(value))) {
    return [key, Number(value)];
  }

  if (value === "true" || value === "false") {
    return [key, value === "true" ? true : false];
  }

  return [key, value];
}

function parseFrontmatter(str) {
  if (typeof str !== "string" || str.trim().length === 0) {
    return {};
  }

  const delimeter = "---";
  const lines = str.split(/\n/g);
  const obj = {};
  let delimiterCount = 0;

  for (const line of lines) {
    const cleanLine = line.trim();

    if (cleanLine === delimeter) {
      delimiterCount++;
      if (delimiterCount === 2) break;
      continue;
    }

    if (delimiterCount !== 1 || !cleanLine) continue;

    const [prop, value] = inferPairDataType(cleanLine);

    if (value !== null) {
      obj[prop] = value;
    }
  }

  return obj;
}
