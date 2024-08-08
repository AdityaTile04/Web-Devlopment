const mongoose = require("mongoose");
const Chat = require("./models/Schema");

async function connection() {
  await mongoose.connect("mongodb://localhost:27017/Node");
}

const allData = [
  {
    from: "Kunal",
    to: "Saurabh",
    msg: "give me project topics",
    created_at: new Date(),
  },
  {
    from: "Gaurav",
    to: "Vicky",
    msg: "tell me about project",
    created_at: new Date(),
  },
  {
    from: "Rahul",
    to: "sgum=bham",
    msg: "give your notes",
    created_at: new Date(),
  },
  {
    from: "Sanket",
    to: "Yash",
    msg: "you want to play games",
    created_at: new Date(),
  },
  {
    from: "Sneha",
    to: "Priya",
    msg: "you'll come college tomarrrow",
    created_at: new Date(),
  },
  {
    from: "Raj",
    to: "Jay",
    msg: "good morning",
    created_at: new Date(),
  },
];

Chat.insertMany(allData)
  .then((res) => console.log(res))
  .catch((err) => console.log(object));

connection()
  .then(() => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
