const express = require("express");
const router = express.Router();
const userController = require("../module/admin/admin.controller");
const roomController = require("../module/room/room.controller");
const floorController = require("../module/floor/floor.controller");
const bookingController = require("../module/booking/booking.controller");

router.use("/users", userController);
router.use("/rooms", roomController);
router.use("/floor", floorController);
router.use("/booking", bookingController);

module.exports = router;
