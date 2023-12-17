const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const minesMatrix = matrix.reduce(((acc, el) => {
    el = el.map((bool, i) => bool ? el[i] = 1 : el[i] = 0 );
    acc.push(el);
    return acc;
  }), [])

  const resultMatrix = [];
  for (let i = 0; i < minesMatrix.length; i += 1) {
    resultMatrix.push([])
    for (let j = 0; j < minesMatrix[i].length; j += 1) {
      let number = minesMatrix[i][j];
      if (number === 1) {
        resultMatrix[i].push(number);
        continue;
      }
      if (minesMatrix[i - 1] !== undefined) {
        number = number + minesMatrix[i - 1][j] +
            (minesMatrix[i - 1][j - 1] ? minesMatrix[i - 1][j - 1] : 0) +
            (minesMatrix[i - 1][j + 1] ? minesMatrix[i - 1][j + 1] : 0)
      }
      if (minesMatrix[i + 1] !== undefined) {
        number = number + minesMatrix[i + 1][j] +
            (minesMatrix[i + 1][j - 1] ? minesMatrix[i + 1][j - 1] : 0) +
            (minesMatrix[i + 1][j + 1] ? minesMatrix[i + 1][j + 1] : 0)
      }
      number = number +
        (minesMatrix[i][j - 1] ? minesMatrix[i][j - 1] : 0) +
        (minesMatrix[i][j + 1] ? minesMatrix[i][j + 1] : 0);
      resultMatrix[i].push(number);
    }
  }
  return resultMatrix;
}

module.exports = {
  minesweeper
};
