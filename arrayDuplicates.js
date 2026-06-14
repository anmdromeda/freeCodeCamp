/**
Given an array of integers, return an array of integers that appear more than once in the initial array, 
sorted in ascending order. If no values appear more than once, return an empty array.

Only include one instance of each value in the returned array.

@param {number[]} arr 
*/
function findDuplicates(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  const seen = new Set();
  const duplicates = new Set();

  for (const element of arr) {
    if (seen.has(element)) {
      duplicates.add(element);
    } else {
      seen.add(element);
    }
  }

  return Array.from(duplicates.values()).sort((a, b) => a - b);
}
