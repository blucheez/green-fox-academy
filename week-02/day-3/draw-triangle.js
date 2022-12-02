'use strict'

const lineCount = 4

// Írj egy programot, ami rajzol
// egy ilyen háromszöget:
//
// *
// **
// ***
// ****
//
// A háromszögnek annyi sora legyen, mint amennyi a lineCount értéke
let stars = ''

for (let i = 1; i <= lineCount; i++) {
  for (let j = 0; j < i; j++) {
    stars += '*'
  }
  stars += "\n"
}

console.log(stars)
