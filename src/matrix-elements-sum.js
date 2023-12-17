const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const verticalMatrix = matrix.reduce(((acc, el) => {
    for (let i = 0; i < el.length; i += 1) {
      if (acc[i]) {
        acc[i].push(el[i]);
      } else {
        acc.push([el[i]])
      }
    }
    return acc;
  }), [])
  const result = verticalMatrix.reduce(((acc, el) => {
    for (let i = 0; i < el.length; i += 1) {
      if (el[i - 1] !== 0 ) acc += el[i];
    }
    return acc;
  }), 0)
  return result;
}

module.exports = {
  getMatrixElementsSum
};
