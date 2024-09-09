//! MongoDB Relationships

const mongoose = require("mongoose");

const connection = async () => {
  await mongoose.connect("mongodb://localhost:27017/relationDemo");
};

connection()
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Some Error in Database");
  });

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
});

const postSchema = new mongoose.Schema({
  content: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  let user = await User.findOne({ username: "adityatile" });

    let user1 = new User({
      username: "adityatile",
      email: "aditya@gmail.com",
    });

  let post2 = new Post({
    content: "Good Morning",
    likes: 20,
  });

  post2.user = user;

  await post2.save();
};

addData();

const getData = async () => {
  let result = await Post.findOne({}).populate("user", "username");
  console.log(result);
};

getData();
