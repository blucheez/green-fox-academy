const body = document.querySelector('body')

const listDiv = document.createElement('div')
const opDiv = document.createElement('div')
const emptyDiv = document.createElement('div')

body.appendChild(listDiv)
body.appendChild(opDiv)
body.appendChild(emptyDiv)

listDiv.classList.add('list')
opDiv.classList.add('op')
emptyDiv.classList.add('empty')

const list = ['bread', 'milk', 'orange', 'tomato']
const op = ['Up', 'move', 'X', 'Down']

list.forEach((item) => {
  const listItem = document.createElement('span')
  listItem.textContent = item
  listDiv.appendChild(listItem)
})
op.forEach((item) => {
  const opButton = document.createElement('button')
  opButton.textContent = item
  opButton.classList.add(`${item.toLowerCase()}`)
  opDiv.appendChild(opButton)
})

const upBtn = document.querySelector('.up')
const moveBtn = document.querySelector('.move')
moveBtn.textContent = '>'
const delBtn = document.querySelector('.x')
const downBtn = document.querySelector('.down')
listDiv.childNodes[0].classList.add('selected')
const listToSelect = [...listDiv.childNodes]

let counter = 0
downBtn.addEventListener('click', () => {
  while (counter < listToSelect.length - 1) {
    if (listToSelect[counter].classList.contains('selected')) {
      listToSelect[counter].classList.remove('selected')
      listToSelect[counter + 1].classList.add('selected')
      counter++
    }
    break
  }
})

upBtn.addEventListener('click', () => {
  while (counter > 0) {
    if (listToSelect[counter].classList.contains('selected')) {
      listToSelect[counter].classList.remove('selected')
      listToSelect[counter - 1].classList.add('selected')
      counter--
    }
    break
  }
})

moveBtn.addEventListener('click', () => {
  while (counter < listToSelect.length) {
    if (listToSelect[counter].classList.contains('selected')) {
      emptyDiv.prepend(listToSelect[counter])
      listToSelect[counter].classList.remove('selected')
      listToSelect.splice(counter, 1)
      if (listToSelect.length > 0) {
        listToSelect[0].classList.add('selected')
        counter = 0
      }
    }
    break
  }
})
delBtn.addEventListener('click', () => {
  while (counter < listDiv.childNodes.length) {
    if (listDiv.childNodes[counter].classList.contains('selected')) {
      listDiv.childNodes[counter].classList.remove('selected')
      listDiv.removeChild(listDiv.childNodes[counter])
      if (listDiv.childNodes.length > 0) {
        listDiv.childNodes[0].classList.add('selected')
        counter = 0
      }
    }
    break
  }
})
