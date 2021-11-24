const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const router = require("./router/router.js");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("<h3>Welcome</h3>");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
