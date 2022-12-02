import BankAccount from "./BankAccount.js";
import USADollar from "./USADollar.js";

const myMoney = new USADollar(50)
const myAcc = new BankAccount("Mine", 1337, myMoney)
myAcc.deposit(500)
console.log(myAcc);