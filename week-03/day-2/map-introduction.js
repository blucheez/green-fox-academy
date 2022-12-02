let obj = {}

const isEmpty = console.log(Object.keys(obj).length === 0)

obj = {
  97: 'a',
  98: 'b',
  99: 'c',
  65: 'A',
  66: 'B',
  67: 'C',
}

console.log(Object.keys(obj))
console.log(Object.values(obj))

obj[68] = "D"

console.log(Object.keys(obj).length)
console.log(obj[99])

delete obj[97]

const isThereAValue = obj[100] !== undefined
console.log(isThereAValue)

for (let prop in obj) {
    delete obj[prop];
  }

console.log(obj)