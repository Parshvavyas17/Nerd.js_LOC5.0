const jwt = require("jsonwebtoken");
const Job = require("../models/job.model");

const jobAuth = async (req, res, next) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findOne({ _id: jobId });
    if (!job) {
      throw new Error("No job found");
    }
    req.job = job;
    next();
  } catch (error) {
    res.status(401).send({ error: "Job does not belong to the your company." });
  }
};

module.exports = jobAuth;
