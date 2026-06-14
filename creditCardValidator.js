/*

Given a string of digits for a credit card number, determine if it's a valid card number using the following method:

- Starting from the second-to-last digit, double every other digit moving left.
- If doubling a digit results in a number greater than 9, subtract 9.
- Sum all the digits (doubled and undoubled).
- If the total is divisible by 10, the number is valid.

*/

function isValidCreditCardNumber(number) {
  return typeof number === "string" && /^\d+$/.test(number);
}

function isValidCard(number) {
  if (!isValidCreditCardNumber(number)) {
    return false;
  }

  let total = 0;
  let shouldDouble = false;

  for (let i = number.length - 1; i >= 0; i--) {
    let digit = Number(number[i]);

    if (shouldDouble) {
      digit = digit * 2;

      if (digit > 9) digit -= 9;
    }

    total += digit;
    shouldDouble = !shouldDouble;
  }

  return total % 10 === 0;
}
