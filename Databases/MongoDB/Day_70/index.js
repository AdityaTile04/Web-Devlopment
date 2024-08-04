const mongoose = require("mongoose");

async function connection() {
  await mongoose.connect("mongodb://localhost:27017/Delta");
}

connection()
  .then(() => {
    console.log(`MongoDB Connected`);
  })
  .catch((err) => {
    console.log(`Some Error in database`);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

const user1 = new User({ name: "Aditya", email: "aditya@gmail.com", age: 19 });
const user2 = new User({ name: "Rushi", email: "rushi@gmail.com", age: 20 });

//! Insert only one user at a time
user2
  .save()
  .then((res) => {
    console.log(`Data Added to Database`);
  })
  .catch((err) => {
    console.log(err);
  });

//! Inserting multiple
