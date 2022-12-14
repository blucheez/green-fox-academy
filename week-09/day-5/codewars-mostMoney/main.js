import Student from './Student.js'

function mostMoney(students) {
  const newArr = students.map((student) => {
    return {
      ...student,
      money: student.fives * 5 + student.tens * 10 + student.twenties * 20,
    }
  })
  newArr.sort((a, b) => b.money - a.money)
  console.log(newArr)

  for (let i = 0; i < newArr.length; i++) {
    if (newArr.length === 1) {
      return newArr[i].name
    } else if (newArr[i].money === newArr[i + 1].money) {
      return 'all'
    } else {
      return newArr[0].name
    }
  }
}

const andy = new Student('Andy', 0, 0, 2)
const stephen = new Student('Stephen', 0, 4, 0)
const eric = new Student('Eric', 8, 1, 0)
const david = new Student('David', 2, 0, 1)
const phil = new Student('Phil', 0, 2, 1)
const cam = new Student('Cameron', 2, 2, 0)
const geoff = new Student('Geoff', 0, 3, 0)

console.log(mostMoney([cam, geoff]))
