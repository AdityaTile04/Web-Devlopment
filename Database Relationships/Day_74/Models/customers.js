//! MongoDB Relationships

const mongoose = require("mongoose");
const { Schema } = mongoose;

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

//! Approach 2 (one to many)
const orderSchema = new mongoose.Schema({
  item: String,
  price: Number,
});

const customerSchema = new mongoose.Schema({
  name: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

//! Mongoose Middlewares (Pre and Post)

// customerSchema.pre("findOneAndDelete", async () => {
//   console.log("Pre Middleware");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let result = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(result);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomers = async () => {
//   let customer1 = new Customer({
//     name: "Aditya Tile",
//   });

//   let order1 = await Order.findOne({ item: "Pen" });
//   let order2 = await Order.findOne({ item: "Chocolate" });

//   customer1.orders.push(order1);
//   customer1.orders.push(order2);

//   let result = await customer1.save();
//   console.log(result);
// };

// addCustomers()
//   .then(console.log("Data Added"))
//   .catch((err) => console.log(err));

//! One to Many (Populate)

// const findCustomers = async () => {
//   let result = await Customer.find({}).populate("orders");
//   console.log(result[0]);
// };

// findCustomers();

//! Handling Deletion Using Mongoose Middleware

const addCust = async () => {
  let newCust = new Customer({
    name: "Kunal Tile",
  });

  let newOrder = new Order({
    item: "Vada Pav",
    price: 99,
  });

  newCust.orders.push(newOrder);

  await newOrder.save();
  await newCust.save();

  console.log("added new customer");
};

addCust();

const delCust = async () => {
  let data = await Customer.findByIdAndDelete("66defd5225b18e4840e69ed7");
  console.log(data);
};

delCust();

// const addOrders = async () => {
//   let result = await Order.insertMany([
//     { item: "Samosa", price: 10 },
//     { item: "Pen", price: 10 },
//     { item: "Chocolate", price: 50 },
//   ]);

//   console.log(result);
// };

// addOrders()
//   .then(() => console.log("Data Added"))
//   .catch((err) => console.log(err));
