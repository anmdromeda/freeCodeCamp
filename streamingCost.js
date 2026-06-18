/*

Given an array representing movies in the cart of your streaming service, 
and a string for your subscription tier, return the total cost of the movies.

Each item in the cart is an object with a "format" ("HD" or "4K") and a "type" ("rent" or "buy"). Their costs are:

"rent"	"buy"
"HD"	$3.99	$12.99
"4K"	$5.99	$19.99
Apply the following subscription tier discounts:

"none": full price
"basic": 10% off
"premium": 25% off
Return the total cost rounded to two decimal places in the format "$D.CC".

*/

const PurchaseType = {
  Rent: "rent",
  Buy: "buy",
};

const MovieFormat = {
  HighDefinition: "HD",
  UltraHD: "4K",
};

const SubscriptionType = {
  None: "none",
  Basic: "basic",
  Premium: "premium",
};

const StreamingPrices = {
  [PurchaseType.Rent]: {
    [MovieFormat.HighDefinition]: 3.99,
    [MovieFormat.UltraHD]: 5.99,
  },

  [PurchaseType.Buy]: {
    [MovieFormat.HighDefinition]: 12.99,
    [MovieFormat.UltraHD]: 19.99,
  },
};

function roundValue(num) {
  if (typeof num !== "number") {
    return 0;
  }

  const [int, decimals] = String(num.toFixed(3)).split(".");

  if (decimals.length !== 3) {
    return num;
  }

  const penultimate = Number(decimals[1]);

  let newDecimals = `${decimals[0]}${penultimate}`;

  if (penultimate === 5) {
    newDecimals = `${decimals[0]}6`;
  }

  return Number(`${int}.${newDecimals}`);
}

function formatPrice(value) {
  const amount = `$${roundValue(value)}`;
  return amount;
}

class StreamingBillCalculationError extends Error {
  constructor(message) {
    super(message);
    this.name = "StreamingBillCalculationError";
  }
}

function isValidMovieSchema(movie) {
  return (
    movie &&
    Object.hasOwn(movie, "format") &&
    Object.hasOwn(movie, "type") &&
    Object.values(MovieFormat).includes(movie.format) &&
    Object.values(PurchaseType).includes(movie.type)
  );
}

function isValidCart(cart) {
  return Array.isArray(cart) && cart.length > 0 && cart.every(isValidMovieSchema);
}

function getMovieCost(movie) {
  return StreamingPrices[movie.type][movie.format];
}

function isValidSubscription(subscription) {
  return Object.values(SubscriptionType).some((name) => name === subscription);
}

function getCartTotal(cart) {
  return cart.reduce((total, movie) => {
    return total + getMovieCost(movie);
  }, 0);
}

function applyCartTotalDiscount(total, subscription) {
  const discounts = {
    [SubscriptionType.None]: 0,
    [SubscriptionType.Basic]: 0.1,
    [SubscriptionType.Premium]: 0.25,
  };

  const discount = discounts[subscription] || 0;

  if (discount > 0) {
    return total - total * discount;
  }

  return total;
}

function getStreamingBill(cart, subscription) {
  if (!isValidCart(cart)) {
    throw new StreamingBillCalculationError("Invalid cart");
  }

  if (!isValidSubscription(subscription)) {
    throw new StreamingBillCalculationError("Invalid subscription");
  }

  const total = getCartTotal(cart);
  const withDiscount = applyCartTotalDiscount(total, subscription);

  return formatPrice(withDiscount);
}
