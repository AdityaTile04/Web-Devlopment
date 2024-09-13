//! Sending cookies

const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

// using cookie parser
app.use(cookieParser("secretcode"));

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

//! Signed Cookies

app.get("/getsignedcookies", (req, res) => {
  res.cookie("name", "Aditya", { signed: true });
  res.send("cookie send succesfully");
});

//! To verify signedCookies

app.get("/verify", (req, res) => {
  console.log(req.signedCookies);
  res.send("verified");
});

app.listen(3000, () => {
  console.log("Server running on port: 3000");
});
