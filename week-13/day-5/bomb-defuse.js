const counter = document.querySelector('.display')
const btn = document.querySelector('button')

let from = 10
const downCounter = setInterval(() => {
  if (from <= 0) {
    clearInterval(downCounter)
    counter.textContent = 'A bomba felrobbant!'
  } else {
    counter.textContent = from
  }
  from -= 1
}, 1000)

btn.onclick = () => {
  clearInterval(downCounter)
  counter.textContent = 'Bomba hatástalanítva!'
}
