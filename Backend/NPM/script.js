//! NPM
// npm is a standard package manager for Node.js

//! Installing packages using npm

// npm install <packageName>

//! node_modules
// The node_modules folder contains every installed dependency for your project

//! package-lock.json
// It records the exact version of every installed dependency,including its sub-dependenceis and thier versions

const figlet = require("figlet");

figlet("Aditya", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
