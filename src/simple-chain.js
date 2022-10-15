const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainsArray: [],

  getLength() {
    return this.chainsArray.length
  },
  addLink(item) {
    this.chainsArray.push(`( ${item} )`)

    return this
  },
  removeLink(indexPosition) {
    if (
      indexPosition - 1 < 0 ||
      indexPosition - 1 >= this.chainsArray.length ||
      typeof indexPosition !== 'number'
    ) {
      this.chainsArray = []
      throw new Error("You can't remove incorrect link!")
    }

    this.chainsArray.splice(indexPosition - 1, 1)

    return this
  },
  reverseChain() {
    this.chainsArray.reverse()

    return this
  },
  finishChain() {
    const finishedChains = this.chainsArray.join('~~')
    this.chainsArray = []

    return finishedChains
  },
}

module.exports = {
  chainMaker,
}
