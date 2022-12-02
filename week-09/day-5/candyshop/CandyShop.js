export default class CandyShop {
  sugar = 0
  income = 0
  inventory = []

  constructor(amountOfSugar) {
    this.sugar = amountOfSugar
  }

  createCandy(candy) {
    if (this.sugar - candy.getSugar() < 0) {
      throw new Error('Elfogyott a cukor!')
    } else {
      this.inventory.push(candy)
      this.sugar -= candy.getSugar()
    }
  }

  raisePrice(amount) {
    this.inventory.forEach((candy) => {
      candy.setPrice(this.getPrice() + amount)
    })
  }

  sell(n) {
    if (n < this.inventory.length) {
      const itemsToSell = this.inventory.slice(-n)
      itemsToSell.forEach((item) => {
        this.income += item.getPrice()
      })
      const filtered = this.inventory.filter((item) => {
        return !itemsToSell.includes(item)
      })
      this.inventory = filtered
    } else {
      this.inventory.forEach((item) => {
        this.income += item.getPrice()
      })
      this.inventory = []
    }
  }

  buySugar(amount) {
    const priceOfAmount = amount * 600
    if (this.income - priceOfAmount < 0) {
      throw new Error('Elfogyott a pénz!')
    } else {
      this.sugar += amount * 1000
      this.income -= priceOfAmount
    }
  }

  toString() {
    let lolli = 0
    let hardCandy = 0
    for (let i = 0; i < this.inventory.length; i++) {
      if (this.inventory[i].constructor.name === 'Lollipop') {
        lolli++
      } else if (this.inventory[i].constructor.name === 'HardCandy') {
        hardCandy++
      }
    }

    return `Készlet: ${lolli} cukorka, ${lolli} nyalóka; Bevétel: ${this.income} Ft; Cukor: ${this.sugar} gramm`
  }
}
