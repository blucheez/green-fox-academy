class Sharpie {
  constructor(color, width, inkAmount = 100) {
    this.color = color
    this.width = width
    this.inkAmount = inkAmount
  }

  use() {
    this.inkAmount -= 10
  }
}

export {Sharpie}