function outer() {
  let a = 20;
  function inner() {
    let b = 20;
    console.log(a + b);
  }
 inner();
}

console.log(outer());
