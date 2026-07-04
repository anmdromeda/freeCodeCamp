/*

Kaprekar's Routine
Given a 4-digit number, return the number of times you need to apply Kaprekar's routine until reaching 6174.

Kaprekar's routine works as follows:

Arrange the digits in descending order to form the largest number
Arrange the digits in ascending order to form the smallest number (pad with leading zeros if necessary)
Subtract the smaller from the larger
Repeat with the new number


*/

function kaprekar(n) {
  if (typeof n !== "number" || !Number.isInteger(n) || n <= 0 || Number.isNaN(n)) {
    return 0;
  }

  function doKrapekar(n, count) {
    if (n === 6174) {
      return count;
    }

    const digits = String(n).split("").sort();

    const asc = [...digits].sort();
    const desc = [...asc].reverse();

    const a = Number(asc.join(""));
    const b = Number(desc.join(""));

    const max = Math.max(a, b);
    const min = Math.min(a, b);

    return doKrapekar(max - min, count + 1);
  }

  return doKrapekar(n, 0);
}
