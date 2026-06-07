/*

Given an array of numbers and an integer target, find two unique numbers in the 
array that add up to the target value. Return an array with the indices of those two numbers, 
or "Target not found" if no two numbers sum up to the target.

The returned array should have the indices in ascending order.

*/

function isSafeNumber(value) {
  return typeof value === "number" && !Number.isNaN(Number(value));
}

function isValidNumberList(list = []) {
  const isArr = Array.isArray(list);
  const isAllNums = list.every(isSafeNumber);

  return isArr && isAllNums;
}

function findTarget(arr, target) {
  const TARGET_NOT_FOUND = "Target not found";

  if (!isValidNumberList(arr) || !isSafeNumber(target)) {
    return TARGET_NOT_FOUND;
  }

  const seen = new Map();

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const complement = target - current;

    if (seen.has(complement)) {
      return [seen.get(complement), i].sort();
    }

    seen.set(current, i);
  }

  return TARGET_NOT_FOUND;
}

const result = findTarget([1, 3, 5, 7], 14);
