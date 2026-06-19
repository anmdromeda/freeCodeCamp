/*

Given a rental timestamp, a return timestamp, and a rental tier, return the total cost of the rental including any late fees.

Given timestamps are UTC ISO strings, for example: "2026-06-18T18:30:00Z".
The rental tier is the number of days before the rental is due back: 1, 3, or 7.
Rentals are due back by 12:00 PM UTC or earlier on the last day of the rental period. 
For example, a 1-day rental checked out at any time on March 15 is due back by 12:00 PM UTC on March 16.
Each day past the due date and time incurs a late fee.
Pricing is as follows:

Tier	  Base cost	Late fee per day
1 day	  $4.99	$3.99
3 days	$3.99	$2.99
7 days	$2.99	$0.99

Return the total cost rounded to two decimal places in the format "$D.CC".

*/

function daysToMilliseconds(days) {
  return days * 86400000;
}

function getDaysOfDelay({ startDate, returnDate, tier }) {
  const start = new Date(startDate);
  const returned = new Date(returnDate);

  if (returned <= start) {
    return 0;
  }

  const dueDate = new Date(start);
  dueDate.setUTCDate(dueDate.getUTCDate() + tier);
  dueDate.setUTCHours(12, 0, 0, 0);

  if (returned <= dueDate) {
    return 0;
  }

  const msDiff = returned.getTime() - dueDate.getTime();
  const msInADay = 86400000;

  return Math.ceil(msDiff / msInADay);
}

function isValidTier(tier) {
  return typeof tier === "number" && Object.values(Tiers).includes(tier);
}

function isValidDate(date) {
  if (typeof date !== "string") return false;
  const timestamp = Date.parse(date);
  return !Number.isNaN(timestamp);
}

function formatAmount(value) {
  return new Intl.NumberFormat("en-EN", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    style: "currency",
    currency: "USD",
  }).format(value);
}

class RentalCostCalculationError extends Error {
  constructor(message) {
    super(message);
    this.name = "RentalCostCalculationError";
  }
}

const Tiers = {
  OneDay: 1,
  ThreeDays: 3,
  SevenDays: 7,
};

const RentalPrices = {
  [Tiers.OneDay]: {
    baseCost: 4.99,
    lateFeePerDay: 3.99,
  },

  [Tiers.ThreeDays]: {
    baseCost: 3.99,
    lateFeePerDay: 2.99,
  },

  [Tiers.SevenDays]: {
    baseCost: 2.99,
    lateFeePerDay: 0.99,
  },
};

function getRentalCost(rented, returned, tier) {
  if (!isValidDate(rented) || !isValidDate(returned) || !isValidTier(tier)) {
    throw new RentalCostCalculationError("Invalid params");
  }

  const { baseCost, lateFeePerDay } = RentalPrices[tier];
  const daysOfDelay = getDaysOfDelay({ startDate: rented, returnDate: returned, tier });

  const totalCost = baseCost + daysOfDelay * lateFeePerDay;

  return formatAmount(totalCost);
}
