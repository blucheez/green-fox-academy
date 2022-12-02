'use strict'
// - Írj egy `sum` nevű függvényt, ami visszaadja (return) az egész számok
//   összegét nullától a megadott paraméterig

export default function sum(x) {
  let counter = 0
  for (let i = 0; i <= x; i++) {
    counter += i
  }
  return counter
}

/* console.log(sum(5)) */
