'use strict'
// - Készíts egy `factorio` nevű függvényt, ami visszaadja
//   a bemeneti paraméter faktoriálisát

const factorio = (x) => {
  if (x === 0 || x === 1) {
    return 1
  }
  for (let i = x - 1; i >= 1; i--) {
    x *= i
  }
  return x
}

console.log(factorio(x))
