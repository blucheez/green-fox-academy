const random = (limit) => {
  return Math.floor(Math.random() * limit) + 1
}

const world = document.querySelector('section.world')

for (let i = 0; i < 10; i++) {
  const star = document.createElement('div')
  star.classList.add('star')
  star.style.display = 'inline'
  star.style.left = `${random(100)}%`
  star.style.top = `${random(100)}%`
  world.appendChild(star)
}

world.setAttribute('onmousemove', 'getCursorPosition(event)')
let pointerX = 0
let pointerY = 0
const getCursorPosition = (event) => {
  pointerX = event.clientX
  pointerY = event.clientY
}

const starOnClick = () => {
  const star = document.createElement('div')
  star.classList.add('star')
  star.style.display = 'inline'
  star.style.left = `${(pointerX / world.offsetWidth) * 100}%`
  star.style.top = `${(pointerY / world.offsetHeight) * 100}%`
  world.appendChild(star)
}
world.onclick = () => {
  starOnClick()
}
const starsInWorld = [...document.querySelectorAll('.star')]

for (let i = 0; i < starsInWorld.length; i++) {
  setTimeout(() => {
    if (!starsInWorld[i].classList.contains('fallen')) {
      starsInWorld[i].classList.add('fallen')
    }
  }, random(1500) * i)
}

const tree1 = document.querySelector('.tree.one')
const tree2 = document.querySelector('.tree.two')
let tree1Scale = 1
let tree2Scale = 1
let tree1Height = 35
let tree2Height = 45

tree1.onclick = () => {
  tree1Scale += 1
  tree1Height += 25
  tree1.style.transform = `scale(${tree1Scale})`
  tree1.style.top = `-${tree1Height}px`
}
tree2.onclick = () => {
  tree2Scale += 1
  tree2Height += 30
  tree2.style.transform = `scale(${tree2Scale})`
  tree2.style.top = `-${tree2Height}px`
}
