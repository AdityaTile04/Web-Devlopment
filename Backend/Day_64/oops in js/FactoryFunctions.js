//! Factory Functions
// A function that creates an object

function personMaker(name, age) {
  const person = {
    name: name,
    age: age,
    talk() {
      console.log(`Hello i'm ${this.name}`);
    },
  };

  return person;
}

const person1 = personMaker("aditya", 19);
person1.talk();
console.log(person1);

const p2 = personMaker("Rushi", 20);
p2.talk();
console.log(p2);

// Example 2

function students(name, age, marks) {
  const stdInfo = {
    name: name,
    age: age,
    marks: marks,
    info() {
      console.log(`My Data is : ${name} ${age} ${marks}`);
    },
  };

  return stdInfo;
}

const std1 = students("Aditya", 20, 90);
std1.info();
console.log(std1);
