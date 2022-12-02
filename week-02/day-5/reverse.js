'use strict'
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[3, 4, 5, 6, 7]`
// 2 féleképpen oldd meg a feladatot:
// 1. beéptett metódussal
// 2. egy átmeneti arrayt létrehozva, és egy ciklus segítségével
// Logold ki a konzolra a megfordított numbers tömb mindegyik elemét

const numbers = [3, 4, 5, 6, 7]

const sol1 = numbers.reverse()
const sol2 = (arr) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[arr.length - i - 1]
  }
  return newArr
}

console.log(sol1)
console.log(newArr)
