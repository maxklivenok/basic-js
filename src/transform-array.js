const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = [];
  for (let i = 0; arr.length > i; i++) {
    if (arr[i] === "--double-next") {
      if(arr[i + 1] )newArr.push(arr[i + 1]);
    }
    else if (arr[i] === "--discard-next") i += 1;
    else if (arr[i] === "--double-prev") {
      if (newArr[i - 1]) newArr.push(newArr[i - 1]);
    }
    else if (arr[i] === "--discard-prev") {
      if(newArr.length > 1 && arr[i - 1] === newArr[newArr.length - 1]) newArr.pop();
    }
    else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

module.exports = {
  transform
};
