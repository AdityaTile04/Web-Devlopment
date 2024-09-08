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

//! Approach 1 (one to few)
const userSchema = new mongoose.Schema({
  username: String,
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const userData = async () => {
  let user1 = new User({
    username: "aditya",
    addresses: [
      {
        location: "mohagaon",
        city: "Nashik",
      },
    ],
  });

  user1.addresses.push({
    location: "bandra",
    city: "Mumbai",
  });

  let result = await user1.save();

  console.log(result);
};

userData()
  .then((res) => console.log("Data added succesfully"))
  .catch((err) => console.log(err));
