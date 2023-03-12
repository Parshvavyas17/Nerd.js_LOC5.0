require("dotenv").config();
require("./db/mongoose");
const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/user.route");
const chatRouter = require("./routers/chat.route");
const jobRouter = require("./routers/job.route");
const applicationRouter = require("./routers/application.route");
const companyRouter = require("./routers/recruiter.route");
const messageRouter = require("./routers/message.route");
const getDocByToken = require("./middleware/getDoc");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);
app.use("/api/job", jobRouter);
app.use("/api/application", applicationRouter);
app.use("/api/message", messageRouter);
app.use("/api/company", companyRouter);

app.get("/api", getDocByToken, (req, res) => {
  res.status(200).send({ user: req.user, token: req.token, type: req.type });
});

module.exports = app;
