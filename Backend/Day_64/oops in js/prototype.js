//! Object Prototypes
// Prototypes are the mechanism by which javascript object inherit fetures from one another.
// it is like a single template object inherit methods and properties from without having thier own copy.

let arr = [1, 2, 3];

arr.__proto__.push = (n) => {
  console.log(`Pushing number : ${n}`);
};

arr.push(3);
