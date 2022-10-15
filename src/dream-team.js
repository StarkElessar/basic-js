const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (!arr || !arr.length) return false
  const newCorrectArr = []
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      newCorrectArr.push(arr[i].trim().charAt(0).toUpperCase())
    }
  }

  return newCorrectArr.sort().join('')
}

module.exports = {
  createDreamTeam,
}
