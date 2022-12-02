'use strict'
// Hozz létre dinamikusan* egy kétdimenziós tömböt!
// Tartalma az alábbi mátrix** legyen.
// Használj ciklust hozzá!

//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0

// Logold ki a mátrixot a konzolra.
//
// * a mérete egy változóból érkezzen, így téve dinamikussá a mátrix létrehozását
// ** ne ijedj meg a kifejezéstől, egy mátrix: tömbök a tömbben

const lineCount = 4

let arr = []

for (let i = 0; i < lineCount; i++) {
  arr.push([])
  for (let j = lineCount - 1; j >= 0; j--) {
    if (i === j) {
      arr[i].push(1)
    } else {
      arr[i].push(0)
    }
  }
}

console.log(arr)
