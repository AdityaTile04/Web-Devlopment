//! EJS (Embedded Javascript Templates)
const express = require("express");
const port = 3000;
const path = require("path");
const userData = require("./data.json");

const app = express();

app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));

app.set("views", "ejs");
// path.join
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
  res.send("Welcome users!");
});

app.get("/dice", (req, res) => {
  const dice = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { dice });
});

app.get("/user", (req, res) => {
  let name = "Aditya";
  res.render("user.ejs", { name });
});

app.get("/ig/:username", (req, res) => {
  const { username } = req.params;
  const data = userData[username];
  if (data) {
    res.render("insta.ejs", { data });
  } else {
    res.render("error.ejs");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
