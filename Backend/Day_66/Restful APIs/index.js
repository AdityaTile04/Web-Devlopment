const express = require("express");
const path = require("path");
const port = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Server working well");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
