/*

Given a departure city, an arrival city, a flight duration in hours, and a direction of travel, 
return the number of jet lag hours the traveller is experiencing.

The given cities will be from the following list that includes their UTC offset:

City               Offset
Los Angeles        -8
New York           -5
London             0
Istanbul           +3
Dubai              +4
Hong Kong          +8
Tokyo              +9

To calculate jet lag hours:

- Find the timezone difference in hours between the two cities.
- Determine the direction multiplier. If travelling "east", it's 1.5, otherwise, it's 1.0.
- Get the jet lag hours with the formula: timezone difference + (flight duration * 0.1) * direction multiplier

Return the jet lag hours rounded to one decimal place.


getJetLagHours("Istanbul", "Hong Kong", 10, "east") should return 6.5
*/

/**
 *
 * @param {unknown} value
 * @returns {boolean}
 */
function isSafeNumber(value) {
  return typeof value === "number" && !Number.isNaN(Number(value));
}

/**
 *
 * @param {unknown} value
 * @returns {boolean}
 */
function isValidString(value) {
  return typeof value === "string";
}

/**
 *
 * @param {number} value
 * @returns {number} rounded to one decimal place
 */
function roundValue(value) {
  if (!isSafeNumber(value)) {
    return "";
  }

  return Number(value.toFixed(1));
}

/**
 *
 * @param {'east' | 'weast'} direction
 * @returns {number | null}
 */
function getDirectionMultiplier(direction) {
  const DIRECTION_MULTIPLIERS = {
    EAST: 1.5,
    WEST: 1,
  };

  const directionKey = direction.toUpperCase();

  if (!Object.hasOwn(DIRECTION_MULTIPLIERS, directionKey)) {
    return null;
  }

  return DIRECTION_MULTIPLIERS[directionKey];
}

/**
 *
 * @param {string} fromCity
 * @param {string} toCity
 * @returns {number | null} Timezone difference in UTC
 */
function getTimeZoneDifference(fromCity, toCity) {
  const CITIES = {
    "Los Angeles": -8,
    "New York": -5,
    London: 0,
    Istanbul: +3,
    Dubai: +4,
    "Hong Kong": +8,
    Tokyo: +9,
  };

  const from = CITIES[fromCity];
  const to = CITIES[toCity];

  if (!isSafeNumber(from) || !isSafeNumber(to)) {
    return null;
  }

  const difference = from - to;

  return Math.abs(difference);
}

/**
 *
 * @param {string} departureCity
 * @param {string} arrivalCity
 * @param {number} flightDuration
 * @param {string} direction
 * @returns {number} Jet lag hours with the formula: timezone difference + (flight duration * 0.1) * direction multiplier
 */
function getJetLagHours(departureCity, arrivalCity, flightDuration, direction) {
  if (
    !isValidString(departureCity) ||
    !isValidString(arrivalCity) ||
    !isSafeNumber(flightDuration) ||
    !isValidString(direction)
  ) {
    return 0;
  }

  const timezoneDiff = getTimeZoneDifference(departureCity, arrivalCity) ?? 0;
  const dirMultiplier = getDirectionMultiplier(direction) ?? 0;

  const result = timezoneDiff + flightDuration * 0.1 * dirMultiplier;

  return roundValue(result);
}
