const express = require("express");
const port = 4000;
const ExpressError = require("./ExpressError");

const app = express();

// Error Handling Middleware (Custom)

app.use("/api", (req, res, next) => {
  const { token } = req.query;

  if (token === "access") {
    next();
  } else {
    throw new ExpressError(401, "ACCESS DENIED");
  }
});

app.get("/api", (req, res) => {
  res.send("Data");
});

app.get("/err", (req, res) => {
  abc = abc;
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Only for Admins");
});

app.use((err, req, res, next) => {
  const { status = 500, message } = err;
  res.status(status).send(message);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
