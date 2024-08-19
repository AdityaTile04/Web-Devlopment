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

//! Using next()
// it is must to pass control to the next middleware function.

const checkToken = (req, res, next) => {
  console.log(`hi, i'm middleware 2`);
  next();
};

app.use("/api", checkToken, (req, res, next) => {
  const { token } = req.query;
  if (token === "giveaccess") {
    next();
  } else {
    res.send("ACCESS DENIED");
  }
});

app.get("/api", (req, res) => {
  res.send("Data");
});

app.use("/random", (req, res, next) => {
  console.log(`i'm only for random`);
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
