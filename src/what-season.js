const { NotImplementedError } = require('../extensions/index.js')

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  try {
    if (!date) {
      return 'Unable to determine the time of year!'
    } else {
      date.getYear()
      const seasonObj = {
        winter: [0, 1, 11],
        spring: [2, 3, 4],
        summer: [5, 6, 7],
        autumn: [8, 9, 10],
      }

      for (let key in seasonObj) {
        if (seasonObj[key].includes(date.getMonth())) return key
      }
    }
  } catch {
    throw new Error('Invalid date!')
  }
}

module.exports = {
  getSeason,
}
