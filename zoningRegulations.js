/*
 
Given a 2D grid (array of arrays) representing a city's building layout, 
return the coordinates of all buildings that are violating zoning rules.

Each cell in the grid contains one of the labels from the table below. 
A building is in violation if any of its (up to) 4 neighbors, horizontal or vertical, are a type it cannot be adjacent to.

Label	Type	Cannot be adjacent to
- "i"	industrial	"R", "I"
- "A"	Agricultural	"C"
- "R"	Residential	"i", "C"
- "I"	Institutional	"i"
- "C"	Commercial	"R", "A"
- "" (empty string)	undeveloped	no restrictions

Return the coordinates of all violating cells as an array of [row, col] pairs, in any order. If no violations exist, return an empty array.
*/

const Zones = {
  Industrial: "i",
  Agricultural: "A",
  Residential: "R",
  Institutional: "I",
  Commercial: "C",
  Undeveloped: "",
};

const ZonesAdjacencyRules = {
  [Zones.Industrial]: new Set([Zones.Residential, Zones.Institutional]),
  [Zones.Agricultural]: new Set([Zones.Commercial]),
  [Zones.Residential]: new Set([Zones.Industrial, Zones.Commercial]),
  [Zones.Institutional]: new Set([Zones.Industrial]),
  [Zones.Commercial]: new Set([Zones.Residential, Zones.Agricultural]),
  [Zones.Undeveloped]: new Set(),
};

function isValidGrid(grid) {
  return Array.isArray(grid) && grid.length >= 2 && grid.every((row) => row.length === grid[0].length);
}

/**
 *
 * @param {string[][]} grid
 * @returns {number[][]}
 */
function getZoneViolations(grid) {
  if (!isValidGrid(grid)) {
    return [];
  }

  const result = [];

  function hasInvalidAdyacency({ colIndex, rowIndex }) {
    const currentZone = grid[rowIndex][colIndex];
    const rules = ZonesAdjacencyRules[currentZone];

    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    for (const [dr, dc] of directions) {
      const nr = rowIndex + dr;
      const nc = colIndex + dc;

      // Is between limit
      if (nr >= 0 && nr < grid.length && nc >= 0 && nc < grid[rowIndex].length) {
        if (rules.has(grid[nr][nc])) {
          return true;
        }
      }
    }

    return false;
  }

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
      const isInvalid = hasInvalidAdyacency({
        colIndex,
        rowIndex,
      });

      if (isInvalid) result.push([rowIndex, colIndex]);
    }
  }

  return result;
}
