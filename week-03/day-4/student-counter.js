/* Készíts egy függvényt aminek a neve listOfNames(), diákok listáját várja paraméterként és visszaadja a következőt:
Azok a diákok nevét, akiknek több mint 4 édességük van
Készíts egy függvényt aminek a neve sumOfAge(), diákok listáját várja paraméterként és visszaadja a következőt:
Azon diákok korának az összege, akiknek kevesebb mint 5 édességük van */

const students = [
  { name: 'Theodor', age: 3, candies: 2 },
  { name: 'Paul', age: 9, candies: 2 },
  { name: 'Mark', age: 12, candies: 5 },
  { name: 'Peter', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'George', age: 10, candies: 1 },
]

const listOfNames = (list) => {
  let result = []
  for (let i = 0; i < list.length; i++) {
    if (list[i].candies > 4) {
      result.push(list[i].name)
    }
  }
  return result
}

const sumOfAge = (list) => {
  let acc = 0
  for (let i = 0; i < list.length; i++) {
    if (list[i].candies < 5) {
      acc += list[i].age
    }
  }
  return acc
}

module.exports = {
  listOfNames,
  sumOfAge,
}
