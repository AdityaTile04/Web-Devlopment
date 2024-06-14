//! Node JS

// Node is javascript runtime environment
// it is used for server side programming
// Node js is not a language,library,framework

function evenOdd(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
}

evenOdd(3);

//! Process
// This object provide information about, and control over,the current node js process

//! process.argv object

// Returns an array containing and command-line argument passed when the node js process was launched

const args = process.argv;

for (let i = 2; i < args.length; i++) {
  console.log("Hello", args[i]);
}
