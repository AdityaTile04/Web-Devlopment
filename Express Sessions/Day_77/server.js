//! Express Session

const express = require("express");
const port = 4000;
const session = require("express-session");

const app = express();

app.use(session({ secret: "secretstring" }));

app.get("/session", (req, res) => {
  res.send("Session id saved");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
