require("dotenv").config();
require("./db/mongoose");
const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/user.route");
const chatRouter = require("./routers/chat.route");
const messageRouter = require("./routers/message.route");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);
app.use("/api/message", messageRouter);

module.exports = app;
