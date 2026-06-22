/*

Given a lowercase string, return it translated into leet 
speak by replacing the letters below with their leet substitutions:

Letter	Leet
a	      4
e	      3
g	      9
i	      1
l	      1
o	      0
s	      5
t	      7

Characters with no substitution are left unchanged.

*/

function makeLeet(str) {
  if (typeof str !== "string" || str.length === 0) {
    return "";
  }

  const dict = {
    a: 4,
    e: 3,
    g: 9,
    i: 1,
    l: 1,
    o: 0,
    s: 5,
    t: 7,
  };

  const normalizedStr = str.trim().toLowerCase();

  return normalizedStr
    .split("")
    .map((char) => dict[char] ?? char)
    .join("");
}
