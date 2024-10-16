// Error Handling (Express Default)

const express = require("express");
const app = express();
const port = 3001;

app.use((req, res, next) => {
  const { token } = req.query;
  if (token === "giveaccess") {
    next();
  } else {
    throw new Error("ACCESS DENIED!");
  }
});

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
