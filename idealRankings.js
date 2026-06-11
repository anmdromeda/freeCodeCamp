/*
 
Given a 2D array where each inner array contains (in this order) an idea name, an optimistic estimate, 
a realistic estimate, and a pessimistic estimate (in days), return an array 
of the idea names sorted by expected time to completion, shortest first.

Calculate the expected time to completion for each idea using the following formula:

expected = ((optimistic + 4 * realistic + pessimistic) / 6) * length of idea name

1. Calculate expected completio time by task => Array<[name, completionTime]>;
2. Sort asc calculated by completionTime => Array<[name, completionTime]>.sort() 
3. Return Array<[name, completionTime]> SORTED ASC

*/

function isSafeNumber(value) {
  return typeof value === "number" && !Number.isNaN(Number(value));
}

function roundValue(num) {
  if (!isSafeNumber(num)) {
    return 0;
  }

  return Math.round(num);
}

/**
 *
 * @param {{optimistic: number, realistic: number, pessimistic: number, ideaLength: number}} params
 * @returns {number}
 */
function calcExpectedTime(params) {
  if (typeof params !== "object" || typeof params === null) {
    return Infinity;
  }

  const { optimistic, realistic, pessimistic, ideaLength } = params;

  if ([optimistic, realistic, pessimistic, ideaLength].some((value) => !isSafeNumber(value))) {
    return Infinity;
  }

  return ((optimistic + 4 * realistic + pessimistic) / 6) * ideaLength;
}

/**
 *
 * @param {[string, number, number, number]} idea
 */
function analyzeIdeaTime(idea) {
  const [name, optimistic, realistic, pessimistic] = idea;

  return {
    name,
    time: calcExpectedTime({
      optimistic,
      realistic,
      pessimistic,
      ideaLength: name.length,
    }),
  };
}

/**
 *
 * @param {Array<[string, number, number, number]>} ideas
 * @returns {string[]} idea names sorted by expected time to completion, shortest first.
 */
function analyzeIdeas(ideas) {
  if (!Array.isArray(ideas)) {
    return [];
  }

  const processedIdeas = ideas.map(analyzeIdeaTime);

  processedIdeas.sort((ideaA, ideaB) => ideaA.time - ideaB.time);

  return processedIdeas.map((item) => item.name);
}
