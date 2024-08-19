const express = require("express");
const port = 4000;

const app = express();

//! creating logger
// it means print useful information to console

app.use((req, res, next) => {
  req.time = new Date(Date.now()).toString();
  console.log(req.method, req.hostname, req.path, req.time);
  next();
});

app.get("/", (req, res) => {
  res.send(`root is working`);
});

app.get("/demo", (req, res) => {
  res.send(`demo is working`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
