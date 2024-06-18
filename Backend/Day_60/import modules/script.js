//! Import modules

import { generate, count } from "random-words";
import { sum, mul, div } from "./index.js";

console.log(sum(2, 2));
console.log(mul(2, 6));
console.log(div(2, 10));

console.log(generate(5));
console.log(count());
