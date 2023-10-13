const express = require("express");
const { allUsers } = require("./floor.service");
const router = express.Router();

router.get("/", async (req, res) => {
  const users = await allUsers();

  res.send(users);
});

router.get("/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const users = await userById(userId);
    res.send(users);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
