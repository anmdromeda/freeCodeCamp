/*

Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles, 
return a string for the average time it took to run each mile in the format "MM:SS".

*/

function isSafeNumber(value) {
  return typeof value === "number" && !Number.isNaN(Number(value));
}

function isValidString(value) {
  return typeof value === "string";
}

function roundValue(value) {
  return Math.round(value);
}

/**
 *
 * @param {number} seconds
 * @returns {number}
 */
function secondsToMinutes(seconds) {
  return seconds / 60;
}

/**
 *
 * @param {number} minutes
 * @returns {number}
 */
function minutesToSeconds(minutes) {
  return minutes * 60;
}

/**
 *
 * @param {string} time in format MM:SS
 * @returns {{min: number, sec: number} | null}
 */
function extractMinutesAndSecondsFromTime(time) {
  if (!isValidString(time) || !time.includes(":")) {
    return null;
  }

  const parts = time.split(":");

  if (parts.length !== 2) {
    return null;
  }

  const [minutes, seconds] = time.split(":");

  const minutesNumValue = Number(minutes);
  const secondsNumValue = Number(seconds);

  if (!isSafeNumber(minutesNumValue) || !isSafeNumber(secondsNumValue)) {
    return null;
  }

  return {
    min: minutesNumValue,
    sec: secondsNumValue,
  };
}

/**
 *
 * @param {number} minutes
 * @returns {string} time in format MM:SS
 */
function minutesToTime(minutes) {
  const minInteger = Math.floor(minutes);
  const remainingMin = minutes - minInteger;
  const seconds = roundValue(minutesToSeconds(remainingMin));

  const time = `${minInteger.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return time;
}

/**
 *
 * @param {number} miles
 * @param {string} duration
 * @returns {string}
 */
function milePace(miles, duration) {
  const NO_TIME = "00:00";

  if (!isSafeNumber(miles) || !isValidString(duration)) {
    return NO_TIME;
  }

  const minAndSeconds = extractMinutesAndSecondsFromTime(duration);

  if (minAndSeconds === null) {
    return NO_TIME;
  }

  const { min, sec } = minAndSeconds;

  const totalMinutes = min + secondsToMinutes(sec);
  const minutesByMiles = totalMinutes / miles;
  const averageDuration = minutesToTime(minutesByMiles);

  return averageDuration;
}

const result = milePace(26.2, "120:35");
