const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = domains.map((el) => el.split(".").reverse());
  let obj = arr.reduce(((acc, el) => {
    let domain = '';
    for (i = 0; i < el.length; i += 1) {
      domain = `${domain}.${el[i]}`;
      if (domain in acc) {
        acc[domain] = acc[domain] + 1;
      } else {
        acc[domain] = 1;
      }
    }
    return acc
  }), {});
  return obj;
}

module.exports = {
  getDNSStats
};
