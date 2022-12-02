export default class Bank {
  bankAccountList = []

  createAccount(bankAccount) {
    this.bankAccount.push(bankAccount)
  }

  getAllMoney() {
    let sum = 0
    this.bankAccountList.forEach((acc) => {
      sum += acc.getBalance()
    })
    return sum
  }
}
