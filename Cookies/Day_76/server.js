//! Sending cookies

const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

// using cookie parser
app.use(cookieParser());

app.get("/getcookies", (req, res) => {
  res.cookie("greet", "hello");
  res.cookie("name", "Aditya");
  res.send("Sent you some cookies");
});

app.get("/", (req, res) => {
  console.log(req.cookies);
});

app.get("/greet", (req, res) => {
  let { name } = req.cookies;
  res.send(`Hi, ${name}`);
});

app.listen(3000, () => {
  console.log("Server running on port: 3000");
});
