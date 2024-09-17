const mongoose = require("mongoose");
const data = require("./data");
const Listing = require("../models/listing");

async function connection() {
  await mongoose.connect("mongodb://localhost:27017/AirBnb");
}

connection()
  .then(() => {
    console.log(`Database Connected`);
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await Listing.deleteMany({});
  data.data = data.data.map((obj) => ({
    ...obj,
    owner: "66e7f0a805540b67cbed2e72",
  }));
  await Listing.insertMany(data.data);
  console.log(`data was saved`);
};

initDB();
