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
  if (!Array.isArray(matrix) || matrix.length !== matrix[0].length) {
    return [];
  }

  const rotated = [];

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    for (let colIndex = 0; colIndex < matrix.length; colIndex++) {
      if (!rotated[colIndex]) {
        rotated[colIndex] = [];
      }

      rotated[colIndex][matrix.length - rowIndex - 1] = matrix[rowIndex][colIndex];
    }
  }

  return rotated;
}
