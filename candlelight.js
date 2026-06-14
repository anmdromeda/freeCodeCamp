/**

Given an integer representing the number of candles you start with, and an integer 
representing how many burned candles it takes to create a new one, return the number of
candles you will have used after creating and burning as many as you can.

For example, if given 7 candles and it takes 2 burned candles to make a new one:

- Burn 7 candles to get 7 leftovers,
- Recycle 6 leftovers into 3 new candles (1 leftover remains),
- Burn 3 candles to get 3 more leftovers (4 total),
- Recycle 4 leftovers into 2 new candles,
- Burn 2 candles to get 2 leftovers,
- Recycle 2 leftovers into 1 new candle,
- Burn 1 candle.

You will have burned 13 total candles in the example.


@param {number} candles
@param {number} leftoversNeeded
@returns {number}
*/
function burnCandles(candles, leftoversNeeded) {
  if (
    typeof candles !== "number" ||
    typeof leftoversNeeded !== "number" ||
    leftoversNeeded === 0 ||
    leftoversNeeded > candles
  ) {
    return 0;
  }

  if (leftoversNeeded === candles) {
    return 1;
  }

  let totalBurned = 0;
  let currentCandles = candles;
  let leftovers = 0;

  while (currentCandles > 0) {
    totalBurned += currentCandles;
    leftovers += currentCandles;
    currentCandles = Math.floor(leftovers / leftoversNeeded);
    leftovers = leftovers % leftoversNeeded;
  }

  return totalBurned;
}
