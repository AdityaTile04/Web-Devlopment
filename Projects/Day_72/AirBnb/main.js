const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const PORT = 4000;

const app = express();



app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT}`);
});
