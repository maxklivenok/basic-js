const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const max = n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .slice(0, 1);
  const arr = n.toString().split('');
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === max[0]) {
      arr.splice(i - 1, 1);
      return Number(arr.join(''));
    }
  }
  return 1;
}


module.exports = {
  deleteDigit
};
