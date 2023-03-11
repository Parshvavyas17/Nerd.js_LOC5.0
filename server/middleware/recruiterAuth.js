const jwt = require("jsonwebtoken");
const Recruiter = require("../models/recruiter.model");

const userAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await Recruiter.findOne({
      _id: decoded._id,
      token: token,
    });
    if (!user) {
      throw new Error("No user found with given token.");
    }
    req.token = token;
    req.user = user;
    req.type = "Recruiter";
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = userAuth;
