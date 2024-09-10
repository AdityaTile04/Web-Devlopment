const express = require("express");
const router = express.Router();

// Users
router.get("/", (req, res) => {
  res.send("root is working");
});

router.get("/index", (req, res) => {
  res.send("All Users");
});

router.post("/new", (req, res) => {
  res.send("post user");
});

router.delete("/:id", (req, res) => {
  res.send("for delete user");
});

module.exports = router;
