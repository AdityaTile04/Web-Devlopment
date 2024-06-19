//! Express
// A Node.js web application framework that helps us to make web applications it is used for server side programming.

const express = require("express");
const port = 3000;

const app = express();

app.use((req, res) => {
  console.log("Request recieved");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
