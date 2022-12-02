export default class BankAccount {
  name
  pinCode
  currency

  constructor(name, pinCode, currency) {
    this.name = name
    this.pinCode = pinCode
    this.currency = currency
  }

  deposit(sum) {
    if (sum > 0) {
      this.currency.addAmount(sum)
    } else {
      throw new Error('Csak pozitív érték adható meg!')
    }
  }

  withdraw(pinCode, sum) {
    if (this.pinCode === pinCode && this.currency.getValue() >= sum) {
      this.currency.withdrawAmount(sum)
      return sum
    } else {
      return 0
    }
  }

  getBalance() {
    return this.currency.getValue()
  }
}
