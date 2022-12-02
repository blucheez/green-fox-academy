import { Sharpie } from './sharpie'

class SharpieSet {
  constructor() {
    this.listOfSharpies = []
  }

  add(sharpie) {
    this.listOfSharpies.push(new Sharpie())
  }

  countUsable() {
    let counter = 0

    for (let i = 0; i < this.listOfSharpies.length; i++) {
      if (this.listOfSharpies[i].inkAmount > 0) {
        counter++
      }
    }
    return counter
  }
  removeTrash() {
    const newArr = this.listOfSharpies.map((sharpie) => {
      if (sharpie.inkAmount > 0) {
        return sharpie
      }
    })
    return newArr
  }
}

export { SharpieSet }
