/*

Given an array of integers and an array of string operators, apply the operations to the numbers sequentially 
from left-to-right. Repeat the operations as needed until all numbers are used. Return the final result.

For example, given [1, 2, 3, 4, 5] and ['+', '*'], return the result of evaluating 1 + 2 * 3 + 4 * 5 from left-to-right ignoring standard order of operations.

Valid operators are +, -, *, /, and %.

*/

function isSafeNumber(value) {
  return typeof value === "number" && !Number.isNaN(Number(value));
}

function isValidNumberList(list = []) {
  const isArr = Array.isArray(list);
  const isAllNums = list.every(isSafeNumber);
  return isArr && isAllNums;
}

/**
 *
 * @param {string[]} value
 * @returns
 */
function areValidOperators(value) {
  const validOperators = ["+", "-", "*", "/", "%"];
  return Array.isArray(value) && value.every((operator) => validOperators.includes(operator));
}

/**
 *
 * @param {{a: number, b: number, operator: string}} params
 * @returns {number}
 */
const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => (b !== 0 ? a / b : 0),
  "%": (a, b) => (b !== 0 ? a % b : 0),
};

function doOperation(params) {
  const { a, b, operator } = params;

  const op = operations[operator];
  return op ? op(a, b) : 0;
}

/**
 *
 * @param {number[]} numbers
 * @param {string[]} operators
 * @returns
 */
function evaluate(numbers, operators) {
  if (!isValidNumberList(numbers) || !areValidOperators(operators)) {
    return 0;
  }

  let result = numbers[0];
  let currentOperatorIndex = 0;

  for (let i = 1; i < numbers.length; i++) {
    result = doOperation({ a: result, b: numbers[i], operator: operators[currentOperatorIndex] });
    currentOperatorIndex = currentOperatorIndex === operators.length - 1 ? 0 : currentOperatorIndex + 1;
  }

  return result;
}
