const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controllers/message.controller");
const userAuth = require("../middleware/userAuth");

const router = express.Router();

router.get("/:chatId", userAuth, allMessages);
router.post("/", userAuth, sendMessage);

module.exports = router;
