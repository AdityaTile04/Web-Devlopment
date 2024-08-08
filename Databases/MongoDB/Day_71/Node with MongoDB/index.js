const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = 3000;
const Chat = require("./models/Schema");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

async function connection() {
  await mongoose.connect("mongodb://localhost:27017/Node");
}

connection()
  .then((res) => {
    console.log(`Database Connected`);
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/chats", async (req, res) => {
  let allData = await Chat.find();
  res.render("show.ejs", {allData});
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
