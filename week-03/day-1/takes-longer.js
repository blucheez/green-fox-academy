let quote =
  "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."
const missing = 'always takes longer than'

const arr = quote.split(' ')
const pos = arr.indexOf('you')
arr.splice(pos, 0, missing)
const output = arr.join(' ')
console.log(output)
