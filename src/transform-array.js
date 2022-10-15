const { NotImplementedError } = require('../extensions/index.js')

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
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  const params = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ]
  const newCorrectArray = [...arr]

  newCorrectArray.forEach((item, i) => {
    if (params.includes(item)) {
      if (item === params[0]) {
        newCorrectArray[i] = undefined
        newCorrectArray[i + 1] = undefined
      } else if (item === params[1]) {
        newCorrectArray[i] = undefined
        newCorrectArray[i - 1] = undefined
      } else if (item === params[2]) {
        newCorrectArray[i] = newCorrectArray[i + 1]
      } else if (item === params[3]) {
        newCorrectArray[i] = newCorrectArray[i - 1]
      }
    }
  })

  return newCorrectArray.filter((item) => item !== undefined)
}

module.exports = {
  transform,
}
