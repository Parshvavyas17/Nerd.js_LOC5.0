const mongoose = require("mongoose");
const Job = require("../models/job.model");

const getSelfJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ company: req.user._id });
    res.status(200).send(jobs);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getJobById = async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const job = await Job.findOne({ _id: id });
    res.status(200).send(job);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
};

/*
    {
    "title": "Web Developer",
    "noOfPos": 2,
    "skills": ["html", "css", "js"],
    "empType": "PartTime",
    "minExp": 2,
    "desc": "Good Web Developer needed",
    "salary": 1000,
    "location": "Remote",
    "duration": 1
    }
*/
const createJob = async (req, res) => {
  const job = new Job({ ...req.body, company: req.user._id });
  try {
    await job.save();
    res.status(201).send(job);
  } catch (error) {
    console.log(error.message);
    res.status(200).send(error);
  }
};

/*
    {
        "title": "Full Stack Developer",
        "noOfPos": 1,
        "skills": ["react", "node"],
        "empType": "FullTime",
        "minExp": 3,
        "desc": "Pull Stack Web Developer needed",
        "salary": 10000,
        "location": "Remote",
        "duration": 3
    }
*/
const updateJob = async (req, res) => {
  const updates = Object.keys(req.body);
  const validOperations = [
    "title",
    "noOfPos",
    "skills",
    "empType",
    "minExp",
    "desc",
    "salary",
    "location",
    "duration",
  ];
  const isUpdateValid = updates.every((update) =>
    validOperations.includes(update)
  );
  if (!isUpdateValid) {
    return res.status(400).send("Invalid Update Request");
  }
  try {
    updates.forEach((update) => (req.job[update] = req.body[update]));
    await req.job.save();
    res.status(200).send(req.job);
  } catch (error) {
    res.status(400).send({
      error,
      message: "Something went wrong",
    });
  }
};

const deleteJobById = async (req, res) => {
  try {
    await req.job.remove();
    res.status(200).send(req.job);
  } catch (error) {
    res.status(400).send({
      error,
      message: "Something went wrong",
    });
  }
};

const getJobApplicants = async (req, res) => {
  try {
    await req.job.populate("applicants");
    res.status(200).send(req.job.applicants);
  } catch (error) {
    res.status(400).send({
      error,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  getSelfJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJobById,
  getJobApplicants,
};
