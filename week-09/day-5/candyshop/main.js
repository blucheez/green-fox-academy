import CandyShop from "./CandyShop.js";
import HardCandy from "./HardCandy.js";
import Lollipop from "./Lollipop.js";


const candyShop = new CandyShop(1000)
candyShop.createCandy(new Lollipop)
candyShop.createCandy(new Lollipop)
candyShop.createCandy(new Lollipop)
candyShop.createCandy(new HardCandy)
candyShop.createCandy(new HardCandy)
candyShop.createCandy(new HardCandy)

candyShop.sell(3)
candyShop.buySugar(1)

console.log(candyShop.toString())
//console.log(candyShop);