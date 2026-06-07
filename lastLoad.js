/*

Given the number of scoops of laundry detergent you have remaining and an array of how many scoops 
you used in each of the previous days, return the number of full days of detergent you have remaining.

Calculate your average daily usage from the usage history and assume that amount of usage each day going forward.

*/

function isSafeNumber(value) {
  return typeof value === "number" && !Number.isNaN(Number(value));
}

function isValidNumberList(list = []) {
  const isArr = Array.isArray(list);
  const isAllNums = list.every(isSafeNumber);

  return isArr && isAllNums;
}

function roundValue(num) {
  if (!isSafeNumber(num)) {
    return 0;
  }

  return Math.floor(num);
}

function getUsageRate(history = []) {
  if (!isValidNumberList(history) || history.length === 0) {
    return 0;
  }

  const total = history.length;

  const accumulated = history.reduce((acc, value) => {
    return acc + value;
  }, 0);

  const rate = accumulated / total;

  return rate;
}

function lastLoadDate(scoops, usage) {
  if (!isSafeNumber(scoops) || !isValidNumberList(usage)) {
    return 0;
  }

  const rateByDay = getUsageRate(usage);

  return roundValue(scoops / rateByDay);
}
