const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = 4000;
const Chat = require("./models/Schema");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Error handling middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occured" } = err;
  res.status(status).send(message);
});

async function connection() {
  await mongoose.connect("mongodb://localhost:27017/FakeChats");
}

connection()
  .then((res) => {
    console.log(`Database Connected`);
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/chats", async (req, res, next) => {
  try {
    let allData = await Chat.find();
    res.render("show.ejs", { allData });
  } catch (err) {
    next(err);
  }
});

// New Route
app.get("/chats/new", (req, res) => {
  throw new ExpressError(404, "Page not foundd");
  res.render("new.ejs");
});

// Create Route
app.post("/chats", async (req, res, next) => {
  try {
    const { from, to, msg } = req.body;
    const newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date(),
    });
    await newChat
      .save()
      .then((res) => console.log(`New Chat Created`))
      .catch((err) => console.log(err));
    res.redirect("/chats");
  } catch (err) {
    next(err);
  }
});

// using wrapAsync

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => {
      next(err);
    });
  };
}

// NEW - Show Route
app.get(
  "/chats/:id",
  wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let userId = await Chat.findById(id);
    if (!userId) {
      next(new ExpressError(404, "Chat not found"));
    }
    res.render("edit.ejs", { userId });
  })
);

// Edit Route
app.get(
  "/chats/:id/edit",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const userId = await Chat.findById(id);
    res.render("edit.ejs", { userId });
  })
);

// Update Route
app.put(
  "/chats/:id",
  wrapAsync(async (req, res, next) => {
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
  })
);

// Delete Route
app.delete(
  "/chats/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const deletedChat = await Chat.findByIdAndDelete(id, { new: true });
    console.log(deletedChat);
  })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
