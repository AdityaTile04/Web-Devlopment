const mongoose = require("mongoose");

async function connection() {
  await mongoose.connect('mongodb://localhost:27017/Delta')
}

connection().then(() => {
  console.log(`MongoDB Connected`);
}).catch((err) => {
  console.log(`Some Error in DB ${err}`);
})