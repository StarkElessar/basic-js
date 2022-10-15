const { NotImplementedError } = require('../extensions/index.js')

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
  const objCountDomains = {}
  
  for (let item of domains) {
    const partsOfDomain = item.split('.').reverse()
    let key = ''

    for (let domain of partsOfDomain) {
      key += `.${domain}`

      objCountDomains[key] = objCountDomains[key]
        ? objCountDomains[key] + 1
        : 1
    }
  }

  return objCountDomains
}

module.exports = {
  getDNSStats,
}
