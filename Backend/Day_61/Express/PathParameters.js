//! Path Parameters

const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Welcome user");
});

app.get("/:name/:id", (req, res) => {
  let { name, id } = req.params;
  console.log(`Hello i'm ${name} my id is ${id}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
