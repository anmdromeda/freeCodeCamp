/*

Given a 2D grid, a starting position ([row, col]), and a new value, replace the value at the starting position and all connected cells of the same value with the new value.

Cells are connected if they are adjacent horizontally or vertically (not diagonally).
Return the updated grid.

*/
function bucketFill(grid, [row, col], newValue) {
  if (
    !Array.isArray(grid) ||
    !Array.isArray(grid[0]) ||
    grid.length !== grid[0].length ||
    grid[row] === undefined ||
    grid[row][col] === undefined ||
    typeof newValue !== "string"
  ) {
    return [];
  }

  const size = grid.length;
  const updated = grid.map((row) => [...row]);
  const adjacentCoords = [];

  function isAdjacent(aCoords, bCoords) {
    const [ax, ay] = aCoords;
    const [bx, by] = bCoords;

    const abXDiff = Math.abs(ax - bx);
    const abYDiff = Math.abs(ay - by);

    // Diagonal diff not allowed
    if (abXDiff === 1 && abYDiff === 1) {
      return false;
    }

    // Not adjacent row
    if (abXDiff !== 1 && abXDiff !== 0) {
      return false;
    }

    // Not adjacent col
    if (abYDiff !== 1 && abYDiff !== 0) {
      return false;
    }

    return true;
  }

  // Find adjacent coords
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (grid[r][c] !== grid[row][col]) continue;

      if (adjacentCoords.length && isAdjacent(adjacentCoords.at(-1), [r, c])) {
        adjacentCoords.push([r, c]);
        continue;
      }

      if (adjacentCoords.length === 0) {
        adjacentCoords.push([r, c]);
      }
    }
  }

  for (const [r, c] of adjacentCoords) {
    updated[r][c] = newValue;
  }

  return updated;
}

console.log(
  bucketFill(
    [
      ["Y", "G", "G"],
      ["Y", "Y", "Y"],
      ["B", "Y", "R"],
    ],
    [1, 2],
    "B",
  ),
);
