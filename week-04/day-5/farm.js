import { Animal } from './animal'

class Farm {
  constructor(limit) {
    this.limit = limit
    this.listOfAnimals = []
  }
  breed(animal) {
    if (this.listOfAnimals.length <= this.limit) {
      this.listOfAnimals.push(new Animal())
    }
    return this.listOfAnimals
  }

  sell() {
    this.listOfAnimals.sort(
      (a, b) => parseFloat(a.hunger) - parseFloat(b.hunger)
    )
    this.listOfAnimals.shift()
  }
}

export { Farm }
