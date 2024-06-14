//! module.exports
// it is a special object

//! require()
// A built-in function to include external modules the exists in separate files

let sum = (a, b) => {
  return a + b;
};

module.exports = console.log(sum(2, 3));
