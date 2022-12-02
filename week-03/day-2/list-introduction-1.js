const names = []

console.log(names.length)

names.push('William')

if (names.length === 0) {
  console.log('A tömb üres!')
} else {
  console.log(names)
}

names.push('John', 'Amanda')

console.log(names)
console.log(names.length)
console.log(names[2])

for (let i = 0; i < names.length; i++) {
  console.log(names[i])
}

names.splice(1, 1)

for (let i = names.length; i >= 0; i--) {
  console.log(names[i])
}

names.length = 0
console.log(names)
