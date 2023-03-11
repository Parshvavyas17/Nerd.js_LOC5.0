const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const Recruiter = require("../models/recruiter.model");

const getDocByToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    let user = await User.findOne({
      _id: decoded._id,
      token: token,
    });
    if (user) {
      req.token = token;
      req.user = user;
      req.type = "Applicant";
      next();
    } else {
      user = await Recruiter.findOne({ _id: decoded._id, token: token });
      if (user) {
        req.token = token;
        req.user = user;
        req.type = "Recruiter";
        next();
      } else {
        throw new Error("No user found for this token.");
      }
    }
  } catch (error) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = getDocByToken;
