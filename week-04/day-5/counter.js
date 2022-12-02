class Counter {
  constructor(number = 0) {
    this.number = number
  }
  add(number) {
    number ? (this.number += number) : (this.number += 1)
  }

  get() {
    return this.number
  }

  reset() {
    new Counter()
  }
}

export { Counter }
