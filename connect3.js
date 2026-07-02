/*

Given a matrix of strings representing pieces on a game grid, determine if any player has three in a row.

Each cell contains "R", "Y", or "" (empty string).
Three in a row means three consecutive non-empty cells of the same type horizontally, vertically, or diagonally.
Return:

- A flat array with the winner and the coordinates of their three winning cells in the format: ["R", [0,2], [1,3], [2,4]]. Coordinates are returned top-to-bottom, then left-to-right.
- An empty array if there is no winner.

*/

function connectThree(matrix = []) {
  if (!Array.isArray(matrix) && matrix.length !== 4 && !Array.isArray(matrix[0]) && matrix[0].length !== 4) {
    throw new Error("Invalid matrix input");
  }

  const size = matrix.length;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const cell = matrix[row][col];

      if (typeof cell !== "string") {
        throw new Error("Invalid matrix input");
      }

      if (cell === "") continue;

      const [col2, col3] = col <= size - 3 ? [col + 1, col + 2] : [col - 1, col - 2];

      // Horizontal
      if (cell === matrix[row][col2] && cell === matrix[row][col3]) {
        return [cell, [row, col], [row, col + 1], [row, col + 2]];
      }

      if (row <= size - 3) {
        // Vertical
        if (cell === matrix[row + 1][col] && cell === matrix[row + 2][col]) {
          return [cell, [row, col], [row + 1, col], [row + 2, col]];
        }

        // Diagonal
        if (cell === matrix[row + 1][col2] && cell === matrix[row + 2][col3]) {
          return [cell, [row, col], [row + 1, col2], [row + 2, col3]];
        }
      }
    }
  }

  return [];
}

console.log(
  connectThree([
    ["", "Y", "", ""],
    ["", "Y", "Y", ""],
    ["", "R", "R", "Y"],
    ["R", "R", "Y", "R"],
  ]),
);
