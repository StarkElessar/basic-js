const { NotImplementedError } = require('../extensions/index.js')

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!arguments[0]) return false
  if (typeof sampleActivity !== 'string') return false

  const numSampleActivity = Number(sampleActivity)

  if (
    isNaN(numSampleActivity) ||
    typeof numSampleActivity === 'undefined' ||
    numSampleActivity === 0
  ) {
    return false
  }

  const log_2 = 0.693
  const k = log_2 / HALF_LIFE_PERIOD
  let res = Math.ceil(Math.log(MODERN_ACTIVITY / numSampleActivity) / k)

  if (Math.abs(res) === Infinity || isNaN(res) || res < 0) return false

  return res
}

module.exports = {
  dateSample,
}
