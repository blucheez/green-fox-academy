export default class Forest {
  treeList

  constructor(treeList = []) {
    this.treeList = treeList
  }

  rain() {
    this.treeList.forEach((tree) => {
      tree.irrigate()
    })
  }

  cutTrees(lumberjack) {
    this.treeList = this.treeList.filter((tree) => {
      return !lumberjack.canCut(tree)
    })
  }

  isEmpty() {
    this.treeList.length === 0
  }

  getStatus() {
    const result = []
    this.treeList.forEach((tree) => {
      const status = `There is a ${tree.getHeight()} tall ${
        tree.constructor.name
      } in the forest.`
      result.push(status)
    })
    return result
  }
}
