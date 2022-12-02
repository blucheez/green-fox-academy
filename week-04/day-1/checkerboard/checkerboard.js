'use strict'

const canvas = document.querySelector('.main-canvas')
const ctx = canvas.getContext('2d')

// NE NYÚLJ A FENTI KÓDHOZ

// Töltsd ki a canvast sakktábla mintával.

let squareSize = 50
let cols = 600 / squareSize
let rows = 400 / squareSize

function drawCheckeredBoard(ctx, squareSize, rows, cols) {
  let whiteSquareColor = '#fff'
  let blackSquareColor = '#000'

  for (let j = 0; j < rows; j++)
    for (let i = 0; i < cols; i++) {
      if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0))
        ctx.fillStyle = whiteSquareColor
      else ctx.fillStyle = blackSquareColor
      ctx.fillRect(i * squareSize, j * squareSize, squareSize, squareSize)
    }
}

drawCheckeredBoard(ctx, squareSize, rows, cols)
