const express = require("express");
const prisma = require("../db/index");

const {
    allUsers,
  } = require("./room.service");
  const router = express.Router();

router.get("/", async (req, res) => {
    const users = await allUsers();
  
    res.send(users);
});

module.exports = router;