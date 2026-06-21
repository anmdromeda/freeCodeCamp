/*

Today is the summer solstice, the longest day of the year in the Northern Hemisphere and the shortest in the Southern. 
Given a latitude, return a string representing daytime and nighttime hours.

The latitude will be between 90 (north pole) and -90 (south pole), inclusive
The number of daytime hours = 12 + (latitude / 90) * 12
Round the daytime hours to the nearest even number
Return a 24-character string using "☀️" for daytime hours and "🌑" for nighttime hours, where:

Each character represents one hour, starting at midnight (hour 0)
Sunrise and sunset fall symmetrically around noon
For example, a latitude of 0 (the equator) has 12 hours of daylight, so sunrise is at 6:00 AM and sunset is at 6:00 PM. Return: "🌑🌑🌑🌑🌑🌑☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️🌑🌑🌑🌑🌑🌑".

*/

function isValidLatitude(value) {
  return typeof value === "number" && !Number.isNaN(value) && value >= -90 && value <= 90;
}

function roundToNearestEven(value) {
  return Math.round(value / 2) * 2;
}

function getDaytimeHours(latitude = 0) {
  if (!isValidLatitude(latitude)) {
    return "";
  }

  const SUN = "☀️";
  const MOON = "🌑";

  const dayTimeHrs = roundToNearestEven(12 + (latitude / 90) * 12);
  const nightTimeHrs = (24 - dayTimeHrs) / 2;

  const moonFill = MOON.repeat(nightTimeHrs);

  return moonFill + SUN.repeat(dayTimeHrs) + moonFill;
}
