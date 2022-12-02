'use strict'

const canvas = document.querySelector('.main-canvas')
const ctx = canvas.getContext('2d')

// NE NYÚLJ A FENTI KÓDHOZ

// Rajzold ki az éjszakai eget:
//  - A háttér legyen fekete
//  - A csillagok kis négyzetek legyenek
//  - A csillagok legynek véletlenszerüen elhelyezve a canvason
//  - A csillagok színe változzon véletlenszerűen (szürke árnyalatai)

const starry = (n, starSize) => {
  const randomGrey = Math.floor(Math.random() * 255) + 1
  const randomFill = `rgb(${randomGrey}, ${randomGrey}, ${randomGrey})`

  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  for (let i = 0; i < n; i++) {
    const randomX = Math.floor(Math.random() * (canvas.width - starSize)) + 1
    const randomY = Math.floor(Math.random() * (canvas.height - starSize)) + 1

    ctx.fillStyle = randomFill
    ctx.fillRect(randomX, randomY, starSize, starSize)
  }
}

starry(10, 10)
