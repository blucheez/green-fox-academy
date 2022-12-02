let obj = {}

obj = {
  '978-1-60309-452-8': 'A Letter to Jo',
  '978-1-60309-459-7': 'Lupus',
  '978-1-60309-444-3': 'Red Panda and Moon Bear',
  '978-1-60309-461-0': 'The Lab',
}

for ([key, value] of Object.entries(obj)) {
  console.log(`${value} (ISBN: ${key})`)
}

delete obj['978-1-60309-444-3']
console.log(obj)

for (let item in obj) {
  if (obj.hasOwnProperty(item) && obj[item] === 'The Lab') {
    delete obj[item]
  }
}
console.log(obj)

obj['978-1-60309-450-4'] = 'They Called Us Enemy'
obj['978-1-60309-453-5'] = 'Why Did We Trust Him?'
console.log(obj)

const isThereAValue = obj['478-0-61159-424-8'] !== undefined
console.log(isThereAValue)

console.log(obj['978-1-60309-453-5'])
