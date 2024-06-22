//! Routing
// It is a process of selecting a path for traffic in a network or between or across multiple networks.

const express = require("express");
const port = 4000;

const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/home", (req, res) => {
  res.send("Home Page");
});

app.get("/user", (req, res) => {
  res.send("User Page");
});

app.get("*", (req, res) => {
  res.send("this path dose not exist");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
