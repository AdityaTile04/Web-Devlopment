const express = require("express");
const mongoose = require("mongoose");
const port = 5000;

const app = express();

async function connection() {
  await mongoose.connect("mongodb://localhost:27017/FakeData");
}

connection()
  .then(() => {
    console.log(`Database connected`);
  })
  .catch((err) => {
    console.log(err);
  });

const FakeData = new mongoose.Schema({
  from: String,
  message: String,
  to: String,
});

const Chat = mongoose.model("Chat", FakeData);

let chat1 = new Chat({
  from: "Aditya",
  message: "Hello",
  to: "Gaurav",
});

chat1.save().then((res) => console.log(`Data Saved`));

app.listen(port, () => console.log(`Server running on port ${port}`));
