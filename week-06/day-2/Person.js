export class Person {
  constructor(name = 'Jane Doe', age = 30, gender = 'female') {
    this.name = name
    this.age = age
    this.gender = gender
  }

  getGoal() {
    console.log('My goal is: Live for the moment!')
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`)
  }
}

/* new Person('Jane Doe', 30, 'female') */
