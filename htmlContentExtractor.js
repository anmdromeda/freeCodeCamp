/*

Given a string of HTML, return the plain text content with all tags removed.

*/

function extractContent(html) {
  if (typeof html !== "string") {
    return null;
  }

  let result = "";
  let shouldOmit = false;

  for (let i = 0; i < html.length; i++) {
    const character = html[i];

    if (character === "<") shouldOmit = true;
    if (!shouldOmit) result += character;
    if (character === ">") shouldOmit = false;
  }

  return result;
}
