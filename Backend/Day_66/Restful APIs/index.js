const express = require("express");
const path = require("path");
const port = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    username: "adityatile",
    content: "i am fullstack developer",
  },
  {
    username: "rushi123",
    content: "i am devops engineer",
  },
  {
    username: "gaurav456",
    content: "i am java fullstack developer",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
