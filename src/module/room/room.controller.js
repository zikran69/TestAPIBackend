const express = require("express");

const { allUsers } = require("./room.service");
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await allUsers();

  res.send(users);
});

module.exports = router;
