const mongoose = require("mongoose");

async function connection() {
  await mongoose.connect("mongodb://localhost:27017/Delta");
}

connection()
  .then((res) => console.log(`Database connected`))
  .catch((err) => console.log(`some error in database`));

//! Schema Validation

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
    min: [1, "Price is too low"],
  },
  discount: {
    type: String,
    default: 0,
  },
  category: {
    type: String,
    enum: ["comedy", "sci-fi"],
  },
});

const Book = mongoose.model("Book", bookSchema);

const book1 = new Book({
  title: "Comic book ",
  author: "abc",
  price: 100,
  category: "comedy",
});

book1
  .save()
  .then((res) => console.log("Data added"))
  .catch((err) => console.log(err));

//! Validation Errors

//! runValidators

Book.findByIdAndUpdate(
  "66afb6df907b3e62c242aa8d",
  { price: -1000 },
  { runValidators: true }
)
  .then((res) => console.log("Price updated"))
  .catch((err) => console.log(err.errors.price.properties.message));
