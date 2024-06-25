
const e = require("express");
const express = require("express");
const path = require("path");
const port = 3000;

const app = express();

app.set("views", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/home", (req, res) => {
  res.send("This is home page");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
