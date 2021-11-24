const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");

const router = require("./router/router.js");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
