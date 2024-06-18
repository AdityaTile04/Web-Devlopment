function evenOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}

const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

//! Type 1

const obj = {
  evenOdd: evenOdd,
  sum: sum,
  mul: mul,
  div: div,
  PI: 3.14,
};

module.exports = obj;

//! Type 2

module.exports = {
  sum: sum,
  mul: mul,
  div: div,
};

//! Type 3

module.exports.sum = (a, b) => a + b;
module.exports.mul = (a, b) => a * b;
module.exports.div = (a, b) => a / b;
