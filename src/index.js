const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const userController = require("./admin/admin.controller");

app.get("/api", (req, res) => {
  res.send("Hello");
});
app.use("/users", userController);

app.listen(PORT, () => {
  console.log("Express API running in Port: " + PORT);
});
