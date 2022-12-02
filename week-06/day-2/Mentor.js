import { Person } from './Person.js'

export class Mentor extends Person {
  constructor(name, age, gender, level = 'intermediate') {
    super(name, age, gender)
    this.level = level
  }

  getGoal() {
    console.log('Educate brilliant junior software developers.')
  }

  introduce() {
    console.log(
      `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`
    )
  }
}

new Mentor('Jane Doe', 30, 'female', 'intermediate')
