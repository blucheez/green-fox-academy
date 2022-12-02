export default class Currency {
  code
  centralBank
  value

  constructor(value) {
    if (value <= 0) {
      throw new Error('Only positive numbers!')
    }
    this.value = value
  }

  addAmount(sum) {
    this.value += sum
  }
  withdrawAmount(sum) {
    this.value -= sum
  }

  getValue() {
    return this.value
  }
}
