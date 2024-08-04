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

User.insertMany([
  { name: "Adam", email: "adam@gmail.com", age: 19 },
  { name: "Alex", email: "alex@gmail.com", age: 18 },
  { name: "Dom", email: "dom@gmail.com", age: 24 },
  { name: "Roman", email: "roman@gmail.com", age: 39 },
]).then((data) => {
  console.log(`Added multiple data at a time ${data}`);
});

//! Find

User.find().then((res) => {
  console.log(res);
});

User.find({ age: { $gt: 19 } }).then((res) => {
  console.log(res);
});

User.findOne({ age: { $gt: 20 } }).then((res) => console.log(res));

User.findById("66af72e18ea68a8e6846b799").then((res) => console.log(res));

//! Update

User.updateOne({ name: "Aditya" }, { age: 20 }).then((res) => console.log(res));

User.updateMany({ age: { $gt: 19 } }, { email: "demo@gmail.com" }).then((res) =>
  console.log(res)
);

User.findOneAndUpdate({ name: "Adam" }, { age: 30}, { new: true }).then(
  (res) => {
    console.log(res);
  }
);

User.findByIdAndUpdate(
  "66af70926406fe8db3dac6cb",
  { name: "Travis" },
  { new: true }
).then((res) => console.log(res));

//! Delete

User.deleteOne({ name: "Dominic" }).then((res) => {
  console.log(res);
})

User.deleteMany({ age: { $gt: 20 } }).then((res) => {
  console.log(res);
});


User.findOneAndDelete({name: 'Alex'}, {new : true}).then((res) => {
  console.log(res);
})

User.findByIdAndDelete('66af72e18ea68a8e6846b799').then((res) => {
  console.log(`User deleted succesfully`);
})