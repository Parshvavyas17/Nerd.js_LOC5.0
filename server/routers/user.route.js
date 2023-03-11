const express = require("express");
const {
  login,
  signup,
  getSelf,
  getAllUsers,
  updateSelf,
} = require("../controllers/user.controller");
const authUser = require("../middleware/userAuth");

const router = express.Router();

router.post("/login", login);

router.post("/signup", signup);

router.get("/self", authUser, getSelf);

router.get("/all", getAllUsers);

router.patch("/self", authUser, updateSelf);

module.exports = router;
