'use strict'

const lineCount = 4

// Írj egy programot, ami rajzol
// egy ilyen négyzetet:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// A négyzetnek annyi sora legyen, mint a lineCount értéke

export default function drawSquare(lineCount) {
  // írd ide a kódodat a Gradescope teszthez
  let output = ''

  for (let i = 0; i < lineCount; i++) {
    for (let j = 0; j < lineCount; j++) {
      if (i === 0 || i === lineCount - 1) {
        output += '%'
      } else {
        if (j === 0 || j === lineCount - 1) {
          output += '%'
        } else {
          output += ' '
        }
      }
    }
    output += '\n'
  }
  console.log(output)
}
