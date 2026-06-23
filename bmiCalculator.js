/*

Given a weight in pounds and a height in inches, return the BMI (Body Mass Index) rounded to one decimal place.

To get BMI: divide the weight by the height squared, then multiply the result by 703.

*/

function roundToOneDecimalPlace(num) {
  return Math.round(num * 10) / 10;
}

function calculateBmi(weight, height) {
  if (typeof weight !== "number" || typeof height !== "number" || weight <= 0 || height <= 0) {
    return 0;
  }

  const bmi = (weight / height ** 2) * 703;

  return roundToOneDecimalPlace(bmi);
}
