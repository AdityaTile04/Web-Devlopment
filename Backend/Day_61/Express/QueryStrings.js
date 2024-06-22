//! Query Strings

const express = require("express");
const port = 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send("<h1>No query found</h1>");
  }
  res.send(`<h1>Search Results for query : ${q}</h1>`);
});

app.get("/user", (req, res) => {
  let { user } = req.query;
  res.send(`Logged users are : ${user}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
