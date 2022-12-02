'use strict'

const canvas = document.querySelector('.main-canvas')
const ctx = canvas.getContext('2d')

// NE NYÚLJ A FENTI KÓDHOZ

// Készíts egy függvényt, ami egy paramétert vár:
// Egy listát [x, y] pontokkal
// és összeköti őket zöld vonalakkal.
// Kösd össze, kapsz egy dobozt: [[10, 10], [290, 10], [290, 290], [10, 290]]
// Kösd össze ezeket: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

const connector = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    ctx.beginPath()
    ctx.moveTo(arr[i][0], arr[i][1])
    ctx.lineTo(arr[i + 1][0], arr[i + 1][1])
    ctx.stroke()
  }
  ctx.lineTo(arr[0][0], arr[0][1])
  ctx.stroke()
}

connector([
  [50, 100],
  [70, 70],
  [80, 90],
  [90, 90],
  [100, 70],
  [120, 100],
  [85, 130],
  [50, 100],
])
