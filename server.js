const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const { PORT } = process.env;
const router = require("./routes/router");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/paginationDB").then((res) => {
  console.log("db connected");
});

app.set("view engine", "ejs");
app.use(router);

console.log(this);

app.listen(PORT || 3000, () => {
  console.log(`server started on port ${PORT}`);
});
