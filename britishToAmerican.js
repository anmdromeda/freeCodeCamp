/*

Given a sentence, convert any British English spellings to their American 
English equivalents using the following lookup table and return the updated sentence:

British	American
"colour"	"color"
"flavour"	"flavor"
"honour"	"honor"
"neighbour"	"neighbor"
"labour"	"labor"
"humour"	"humor"
"centre"	"center"
"fibre"	"fiber"
"defence"	"defense"
"offence"	"offense"
"organise"	"organize"
"recognise"	"recognize"
"analyse"	"analyze"

- Replacements should be case-insensitive. For example, "Colour" should become "Color".
- The input may contain words that build on the exact spelling of a root in the table that also need to be changed. 
- For example, "colouring" should become "coloring", and "disorganised" should become "disorganized".

*/

function normalize(str) {
  return str.toLowerCase();
}

function isCapitalized(word) {
  return word[0] === word[0].toUpperCase();
}

function capitalize(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

function britishToAmerican(sentence) {
  if (typeof sentence !== "string") {
    return "";
  }

  const equivalences = {
    analyse: "analyze",
    centre: "center",
    colour: "color",
    defence: "defense",
    fibre: "fiber",
    flavour: "flavor",
    honour: "honor",
    humour: "humor",
    labour: "labor",
    neighbour: "neighbor",
    offence: "offense",
    organise: "organize",
    recognise: "recognize",
  };

  let result = sentence;

  for (const [british, american] of Object.entries(equivalences)) {
    const regex = new RegExp(british, "gi");

    result = result.replace(regex, (match) => {
      return isCapitalized(match) ? capitalize(american) : american;
    });
  }

  return result;
}

console.log(britishToAmerican("I love the colour blue."));
