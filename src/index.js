const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const router = require("./routes/router");
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/bookingAssets", express.static(__dirname + "/asset/"));

app.get("/api", (req, res) => {
  res.send("Hello");
});
app.use("/", router);

app.listen(PORT, () => {
  console.log("Express API running in Port: " + PORT);
});
