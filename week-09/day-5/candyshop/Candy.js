export default class Candy {
  constructor(price, sugar) {
    this.price = price
    this.sugar = sugar
  }

  getSugar() {
    return this.sugar
  }

  getPrice() {
    return this.price
  }

  setPrice(newPrice) {
    this.price = newPrice
  }
}