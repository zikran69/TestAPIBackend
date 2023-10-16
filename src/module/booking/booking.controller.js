const express = require("express");
const { createUser } = require("./booking.service");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newData = req.body;
    const user = await createUser(newData);

    res.send({
      data: user,
      message: "create booking success",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
