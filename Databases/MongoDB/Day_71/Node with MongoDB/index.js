const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = 3000;
const Chat = require("./models/Schema");
const methodOverride = require("method-override");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

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
  res.render("show.ejs", { allData });
});

// New Route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// Create Route
app.post("/chats", (req, res) => {
  const { from, to, msg } = req.body;
  const newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  newChat
    .save()
    .then((res) => console.log(`New Chat Created`))
    .catch((err) => console.log(err));
  res.redirect("/chats");
});

// Edit Route
app.get("/chats/:id/edit", async (req, res) => {
  const { id } = req.params;
  const userId = await Chat.findById(id);
  res.render("edit.ejs", { userId });
});

// Update Route
app.put("/chats/:id", async (req, res) => {
  const { id } = req.params;
  const { msg: newMsg } = req.body;
  const updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    { runValidators: true },
    { new: true }
  );

  console.log(updatedChat);
  res.redirect("/chats");
});

// Delete Route
app.delete("/chats/:id", async (req, res) => {
  const { id } = req.params;
  const deletedChat = await Chat.findByIdAndDelete(id, { new: true });
  console.log(deletedChat);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
