class Person {
  constructor(name, quirkyFact, favoriteFood, email) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.favoriteFood = favoriteFood;
    this.email = email;
  }

  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }

  food() {
    return `Favorite food is ${this.favoriteFood}`
  }
}

class Student extends Person {
  enroll(cohort) {
    this.cohort = cohort;
  }
}

class Mentor extends Person {
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}

const student = new Student("Gizem", "I am a cat person.", "icecream", "gizem@gmail.com");
student.enroll("May")
console.log(student.food())
console.log(student.bio())
console.log(student)

const mentor = new Mentor("Peter", "I am peter pan.", "steak", "peterpan.gmail.com")
console.log(mentor)
console.log(mentor.food())
mentor.goOffShift()
console.log(mentor)
mentor.goOnShift()
console.log(mentor)