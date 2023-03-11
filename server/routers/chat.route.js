const express = require("express");
const {
  accessChat,
  fetchChats,
  //   createGroupChat,
  //   removeFromGroup,
  //   addToGroup,
  //   renameGroup,
} = require("../controllers/chat.controller");
const userAuth = require("../middleware/userAuth");

const router = express.Router();

router.post("/", userAuth, accessChat);
router.get("/", userAuth, fetchChats);
// router.route("/group").post(protect, createGroupChat);
// router.route("/rename").put(protect, renameGroup);
// router.route("/groupremove").put(protect, removeFromGroup);
// router.route("/groupadd").put(protect, addToGroup);

module.exports = router;
