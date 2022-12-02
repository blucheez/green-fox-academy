'use strict'
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[3, 4, 5, 6, 7]`
// Logold ki az elemek összegét a konzolra!

const numbers = [3, 4, 5, 6, 7]
const sumAll = numbers.reduce((prev, curr) => prev + curr)
console.log(sumAll)
