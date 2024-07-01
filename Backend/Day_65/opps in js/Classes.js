//! Classes
// Classes are a templates for creating objects

// The constructor method is a special method of a class for creating and initialize an object instance of that class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
  }
  info() {
    console.log(`Students data : Name : ${this.name} & Age : ${this.age}`);
  }
}

const std1 = new Person("Aditya", 19);
std1.info();

const std2 = new Person("Gaurav", 19);
std2.info();

// Example 2

class Car {
  constructor(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    console.log(this);
  }
  carInfo() {
    console.log(`Car is : ${this.brand} ${this.model} ${this.color}`);
  }
}

const car1 = new Car("BMW", "M5", "White");
car1.carInfo();

const car2 = new Car("Audi", "A8", "Silver");
car2.carInfo();
