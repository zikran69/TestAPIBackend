const express = require("express");
const router = express.Router();
const userController = require("../module/admin/admin.controller");
const roomController = require("../module/room/room.controller");
const floorController = require("../module/floor/floor.controller");
const bookingController = require("../module/booking/booking.controller");
const loginController = require("../module/login/login.controller");
const reportController = require("../module/report/report.controller");
const { ValidateLogin } = require("../middlewares/validator");

const {
  addCategory,
  allCategory,
  categoryId,
  categorySearch,
  categoryDelete,
} = require("../module/category");

router.use("/login", ValidateLogin, loginController);
router.use("/users", userController);
router.use("/rooms", roomController);
router.use("/floor", floorController);
router.use("/booking", bookingController);
router.use("/reports", reportController);

router.use("/category-add", addCategory);
router.use("/categories", allCategory);
router.use("/category/:id", categoryId);
router.use("/category-search/:name", categorySearch);
router.use("/category-delete/:id", categoryDelete);

module.exports = router;
