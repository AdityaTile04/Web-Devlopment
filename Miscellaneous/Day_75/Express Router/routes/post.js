const express = require("express");
const router = express.Router();

// Posts
router.get("/posts", (req, res) => {
  res.send("All posts");
});

router.get("/:id", (req, res) => {
  res.send("All user posts");
});

router.post("/new", (req, res) => {
  res.send("post for user");
});

router.delete("/:id", (req, res) => {
  res.send("for delete post");
});

module.exports = router;
