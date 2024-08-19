const express = require("express");
const PORT = 3000;

const app = express();

app.use((req, res, next) => {
  console.log(`hi, i'm middleware`);
  next();
});

app.use((req, res, next) => {
  console.log(`hi, i'm 2nd middleware`);
  next();
});

app.get("/", (req, res) => {
  res.send("root is working");
});

app.get("/demo", (req, res) => {
  res.send("this is a demo page");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//! Using next()
// it is must to pass control to the next middleware function.

// example

// app.use((req, res, next) => {
//   console.log(`hi, i'm middleware 2`);
//   next();
// });
