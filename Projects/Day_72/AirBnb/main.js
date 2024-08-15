const express = require("express");
const Listing = require("./models/listing");
const mongoose = require("mongoose");
const path = require("path");
const PORT = 4000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

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


// Index Route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT}`);
});
