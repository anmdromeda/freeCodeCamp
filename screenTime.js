/*

Given an input array of seven integers, representing a week's time, where each integer 
is the amount of hours spent on your phone that day, determine if it is too much screen time based on these constraints:

- If any single day has 10 hours or more, it's too much.
- If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
- If the average of the seven days is greater than or equal to 6 hours, it's too much.

*/

function isSafeHour(value) {
  return typeof value === "number" && !Number.isNaN(value) && value >= 0 && value <= 24;
}

function tooMuchScreenTime(hours) {
  if (!Array.isArray(hours) || hours.length !== 7) {
    return false;
  }

  const weekSize = hours.length;
  let total = 0;

  for (let i = 0; i < weekSize; i++) {
    if (!isSafeHour(hours[i])) {
      throw new Error("Invalid 24 hours value");
    }

    if (hours[i] >= 10) {
      return true;
    }

    if (i <= weekSize - 3) {
      if (!isSafeHour(hours[i + 1]) || !isSafeHour(hours[i + 2])) {
        throw new Error("Invalid 24 hours value");
      }

      const threeDaysSum = hours[i] + hours[i + 1] + hours[i + 2];

      if (threeDaysSum / 3 >= 8) {
        return true;
      }
    }

    total += hours[i];
  }

  return total / weekSize >= 6;
}
