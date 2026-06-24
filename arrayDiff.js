/*

Given two arrays with strings values, return a new array containing all the values that appear in only one of the arrays.
The returned array should be sorted in alphabetical order.

*/

function arrayDiff(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return [];
  }

  const maxSize = Math.max(arr1.length, arr2.length);
  const seen = {};

  for (let i = 0; i < maxSize; i++) {
    if (i < arr1.length) {
      seen[arr1[i]] = seen[arr1[i]] ? seen[arr1[i]] + 1 : 1;
    }

    if (i < arr2.length) {
      seen[arr2[i]] = seen[arr2[i]] ? seen[arr2[i]] + 1 : 1;
    }
  }

  const uniques = [];

  for (const word in seen) {
    if (seen[word] === 1) uniques.push(word);
  }

  uniques.sort();

  return uniques;
}
