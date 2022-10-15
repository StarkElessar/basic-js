const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes = 0,
    separator,
    addition = '',
    additionRepeatTimes = 0,
    additionSeparator,
  } = options

  let resultStr = ''

  for (let i = 0; i < repeatTimes; i++) {
    resultStr += str
    for (let j = 0; j < additionRepeatTimes; j++) {
      resultStr += addition
      resultStr += additionSeparator
    }
    resultStr += separator
  }

  const countSlice = [...separator, ...additionSeparator]

  return resultStr.slice(0, -countSlice.length)
}

module.exports = {
  repeater,
}
