/*

Given two DNA strands of equal length, return an array of indexes where the strands differ (mutations).

DNA strands are strings made up of the characters "A", "T", "C", and "G"
Return the indexes in ascending order
If there are no mutations, return an empty array


*/

function detectMutations(strand1, strand2) {
  if (typeof strand1 !== "string" || typeof strand2 !== "string") {
    return [];
  }

  if (strand1.length !== strand2.length) {
    return [];
  }

  const s1 = strand1.toUpperCase();
  const s2 = strand2.toUpperCase();

  const charactersSet = new Set(["A", "T", "C", "G"]);
  const mutations = [];

  for (let i = 0; i < s1.length; i++) {
    if (!charactersSet.has(s1[i]) || !charactersSet.has(s2[i])) {
      throw new Error("Invalid DNA sequence detected.");
    }

    if (s1[i] !== s2[i]) {
      mutations.push(i);
    }
  }

  return mutations;
}
