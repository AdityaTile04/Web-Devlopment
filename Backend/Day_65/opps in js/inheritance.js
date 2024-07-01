//! Inheritance
// Inheritance is a special mechanism that allows to create new classes on the basis of already existing classes.

// Example 1

// Parent
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
  }
  talk() {
    console.log(`Hi, i'm ${this.name}`);
  }
}
// child
class Student extends Person {
  constructor(name, age, marks) {
    super(name, age); // parent class constructor is being called
    this.marks = marks;
  }
}
// child
class Teacher extends Person {
  constructor(name, age, subjects) {
    super(name, age); // parent class constructor is being called
    this.subjects = subjects;
    console.log(this);
  }
}

const std = new Student("Steve", 23, 80);
std.talk();

const t = new Teacher("abc", 35, "Mathematics");
t.talk();
