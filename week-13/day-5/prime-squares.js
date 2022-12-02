const section = document.getElementsByTagName('section')[0]

for (let i = 1; i <= 100; i++) {
  const newDiv = document.createElement('div')
  newDiv.textContent = i
  section.appendChild(newDiv)
}

const checkPrime = (element) => {
  const num = parseInt(element.textContent)
  let isPrime = true
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      isPrime = false
      break
    }
  }

  if (isPrime) {
    element.classList.add('prime')
  } else {
    element.classList.add('not-prime')
  }
}

for (let i = 0; i < section.children.length; i++) {
  setTimeout(() => {
    checkPrime(section.children[i])
  }, 100 * i)
}

/* console.log(section.children[2])
checkPrime(section.children[3]) */
