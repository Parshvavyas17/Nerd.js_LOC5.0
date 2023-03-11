require("dotenv").config();
require("./db/mongoose");
const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/user.route");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("user", userRouter);

module.exports = app;
