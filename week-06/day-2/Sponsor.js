import { Person } from './Person.js'

export class Sponsor extends Person {
  constructor(name, age, gender, company = 'Google', hiredStudents = 0) {
    super(name, age, gender)
    this.company = company
    this.hiredStudents = hiredStudents
  }

  getGoal() {
    console.log('Hire brilliant junior software developers')
  }

  introduce() {
    console.log(
      `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`
    )
  }

  hire() {
    this.hiredStudents += 1
  }
}
