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
  const err = 'Invalid date!'
  if (!date) return 'Unable to determine the time of year!'
  if (!(date instanceof Date)) throw new Error(err)

  try {
    date.getYear()
  } catch (e) {
    console.log(e)
    throw new Error(err)
  }

  const month = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ]
  const winter = [month[0], month[1], month[11]]
  const spring = [month[2], month[3], month[4]]
  const summer = [month[5], month[6], month[7]]
  const autumn = [month[8], month[9], month[10]]

  const currentMonth = month[date.getMonth()]

  if (winter.includes(currentMonth)) {
    return 'winter'
  } else if (spring.includes(currentMonth)) {
    return 'spring'
  } else if (summer.includes(currentMonth)) {
    return 'summer'
  } else if (autumn.includes(currentMonth)) {
    return 'autumn'
  } else {
    return err
  }
}

module.exports = {
  getSeason,
}
