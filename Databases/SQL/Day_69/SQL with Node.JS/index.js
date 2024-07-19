//! SQL With Node.js

const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");
const port = 3000;

const app = express();

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "my_data",
  password: "aditya",
});

let query = "INSERT INTO user (id,username,email,password) VALUES ?";

// insert data in bulk
const randomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// Home Route
app.get("/", (req, res) => {
  const q = `SELECT count(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      const count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    res.send("Some error occurred");
  }
});

// User Route
app.get("/user", (req, res) => {
  const q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("user.ejs", { users });
    });
  } catch (err) {
    res.send("Some error occcurred");
  }
});

// Edit Route

app.get("/user/:id/edit", (req, res) => {
  const { id } = req.params;
  const q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      const user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (error) {
    res.send("some error occurred");
  }
});

// Update Route
app.patch("/user/:id", (req, res) => {
  const { id } = req.params;
  const q = `SELECT * FROM user WHERE id = '${id}'`;
  const { password: formPass, username: newUsername } = req.body;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      const user = result[0];
      if (formPass != user.password) {
        res.send("Wrong password!");
      } else {
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log("Some error occurred");
  }
});

app.get("/user/new", (req, res) => {
  res.render("addUser.ejs");
});

// Add User Route
app.post("/user/new", (req, res) => {
  const { username, email, password } = req.body;
  const id = uuidv4();
  const q = `INSERT INTO user (id,username,email,password) VALUES ('${id}','${username}',' ${email}', '${password}')`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log("New user added");
      res.redirect("/user");
    });
  } catch (err) {
    res.send("Failed to add user");
  }
});

app.get("/user/:id/delete", (req, res) => {
  const { id } = req.params;
  const q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      const user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    res.send("Error while deleting user");
  }
});

// Delete Route
app.delete("/user/:id/", (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  const q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      const user = result[0];

      if (user.password != password) {
        res.send("Wrong password!");
      } else {
        const q2 = `DELETE FROM user WHERE id = '${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          else {
            console.log(result);
            console.log("User deleted");
            res.redirect("/user");
          }
        });
      }
    });
  } catch (err) {
    res.send("Error while deleting user");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
