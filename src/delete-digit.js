const { NotImplementedError } = require('../extensions/index.js')

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
  const numbersArr = String(n).split('')
  const newArr = []

  for (let i = 0; i < numbersArr.length; i++) {
    newArr.push(
      Number(
        (numbersArr.slice(0, i) + numbersArr.slice(i + 1)).replace(/,/g, '')
      )
    )
  }

  return Math.max(...newArr)
}

module.exports = {
  deleteDigit,
}
