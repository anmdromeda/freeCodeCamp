/*

Given an array of at least two optional stops for a day trip, return the number of valid itinerary arrangements.

The itinerary always includes "breakfast", "lunch", and "dinner", these will not be passed in as arguments. 
The optional stops can be placed anywhere in the itinerary, subject to the following rules:

- "breakfast" is always first, with at least one stop before "lunch".
- "lunch" must appear before "dinner", with at least one stop in between.
- At most, one optional stop may appear after "dinner".
- Return the number of valid arrangements.

getItineraryCount(["library", "park"]) should return 2.


breakfast, library, lunch, park, dinner
breakfast, park, lunch, libray, dinner

2 valids combinations

RULES

breakfast, *{stop}... lunch, *{stop}... dinner, {stop}


FORMULA
(len!) * len + (len - 3)
*/

function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  let acc = 1;
  let index = 1;

  while (index <= n) {
    acc = acc * index++;
  }

  return acc;
}

function getItineraryCount(stops) {
  const totalStops = stops.length;

  if (!Array.isArray(stops) || totalStops < 2) {
    return 0;
  }

  if (totalStops === 2) {
    return 2;
  }

  return factorial(totalStops) * (totalStops + (totalStops - 3));
}
