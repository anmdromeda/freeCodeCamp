/*

Given a matrix (an array of arrays), rotate the matrix 90 degrees clockwise and return it. 
For instance, given [[1, 2], [3, 4]], which looks like this:

1	2
3	4
You should return [[3, 1], [4, 2]], which looks like this:

3	1
4	2

*/

function rotate(matrix) {
  if (
    !Array.isArray(matrix) ||
    matrix.length === 0 ||
    !Array.isArray(matrix[0]) ||
    matrix.length !== matrix[0].length
  ) {
    return [];
  }

  const n = matrix.length;
  const rotated = Array.from({ length: n }, () => Array(n));

  for (let rowIndex = 0; rowIndex < n; rowIndex++) {
    for (let colIndex = 0; colIndex < n; colIndex++) {
      rotated[colIndex][n - rowIndex - 1] = matrix[rowIndex][colIndex];
    }
  }

  return rotated;
}
