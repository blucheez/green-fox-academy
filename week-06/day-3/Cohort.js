export class Cohort {
  constructor(name, students = [], mentors = []) {
    this.name = name
    this.students = students
    this.mentors = mentors
  }

  addStudent(Student) {
    this.students.push(Student)
  }

  addMentor(Mentor) {
    this.mentors.push(Mentor)
  }

  info() {
    console.log(
      `The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors`
    )
  }
}
