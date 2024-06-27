const express = require("express");
const port = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
  const { user, password } = req.query;
  res.send(`This is a GET request, Welcome ${user}`);
});

app.post("/register", (req, res) => {
  const { user, password } = req.body;
  res.send(`This is POST request, Welcome! ${user}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
