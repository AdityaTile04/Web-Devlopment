//! New Operator
// The new operator lets devlopers create an instances of a user-defined object type or of one of the built-in object types that has a constructor function

//! Constructors
// is dosen't return anything & start with capital letters

function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}

Person.prototype.talk = function () {
  console.log(`Hi, my name is : ${this.name}`);
};

const p1 = new Person("Aditya", 19);
const p2 = new Person("Rushi", 20);

// Example 2

function Students(name, rollNo, marks) {
  this.name = name;
  this.rollNo = rollNo;
  this.marks = marks;
  console.log(this);
}

Students.prototype.info = function info() {
  console.log(`Students info : ${this.name}, ${this.rollNo}, ${this.marks}`);
};

const std1 = new Students("Mike", 101, 80);

// Example 3

function Car(brand, model, color) {
  this.brand = brand;
  this.model = model;
  this.color = color;
  console.log(this);
}

Car.prototype.carInfo = function () {
  console.log(`This car is : ${this.brand} ${this.model} ${this.color}`);
};

const car1 = new Car("BMW", "M8", "Black");
car1.carInfo();

const car2 = new Car("Mercedies", "G-Wagon", "Black");
car2.carInfo();

// Example 3

function Food(item, price) {
  this.item = item;
  this.price = price;
  console.log(this);
}

Food.prototype.foodInfo = function () {
  console.log(`The food is : ${this.item} & price is : ${this.price}`);
};

const f1 = new Food("Pizza", 99);
f1.foodInfo();

const f2 = new Food("butter chieken", 220);
f2.foodInfo();
