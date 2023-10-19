const express = require("express");
const router = express.Router();
const userController = require("../module/admin/admin.controller");
const roomController = require("../module/room/room.controller");
const floorController = require("../module/floor/floor.controller");
const loginController = require("../module/login/login.controller");
const { ValidateLogin } = require("../middlewares/validator");

router.use("/login", ValidateLogin, loginController);
router.use("/users", userController);
router.use("/rooms", roomController);
router.use("/floor", floorController);

module.exports = router;
