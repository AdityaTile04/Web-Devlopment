//! Express Router
// Express Routers are a way to organize express application such that our primary app.js file does not become bloated.

const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");

app.use("/users", users);
app.use("/posts", posts);

app.listen(3000, () => {
  console.log("Server running on port: 3000");
});
