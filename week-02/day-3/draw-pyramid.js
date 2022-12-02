'use strict'

const lineCount = 4

// Írj egy programot, ami
// ilyen piramist rajzol:
//
//
//    *
//   ***
//  *****
// *******
//
// A piramisnak annyi sora legyen, mint amennyi a lineCount értéke

export default function drawPyramid(lineCount) {
  // írd ide a kódodat a Gradescope teszthez
  let output = ''
  for (let i = 1; i <= lineCount; i++) {
    for (let j = 1; j <= lineCount - i; j++) {
      output += ' '
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      output += '*'
    }
    output += '\n'
  }
  console.log(output)
}
