const Recruiter = require("../models/recruiter.model");
const mongoose = require("mongoose");
const Job = require("../models/job.model");

/*
    request body
    {
    "name": "SIH 4",
    "email": "sih4@gmail.com",
    "password": "sihcoimbatore",
    "contactNo": 9876543210
    }
*/
const createRecruiter = async (req, res) => {
  const recruiter = new Recruiter(req.body);
  try {
    await recruiter.save();
    const token = await recruiter.generateAuthToken();
    res.status(201).send({ user: recruiter, token: token, type: "Recruiter" });
  } catch (error) {
    res.status(400).send(error);
    console.log(error.message);
  }
};

const getSelfRecruiter = async (req, res) => {
  res.status(200).send(req.user);
};

const getCompanyById = async (req, res) => {
  try {
    const id = mongoose.Types.ObjectId(req.params.id);
    const comp = await Recruiter.findOne({ _id: id });
    res.status(200).send(comp);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error);
  }
};

const logout = async (req, res) => {
  try {
    req.user.token = [];
    await req.user.save();
    res.status(200).send({ message: "Successfully logged out." });
  } catch (error) {
    res.status(400).send({
      error,
      message: "Something went wrong",
    });
  }
};

/*
    request body
    {
    "noOfEmp": 8,
    "location": "Coimbatore",
    "website": "www.sih.com",
    "typeOfCompany": "PF",
    "companyInfo": "My Company"
    }
*/
const updateSelf = async (req, res) => {
  const updates = Object.keys(req.body);
  const validOperations = [
    "name",
    "mobileNo",
    "noOfEmp",
    "location",
    "website",
    "companyInfo",
    "password",
    "avatar",
    "isAdmin",
  ];
  const isUpdateValid = updates.every((update) =>
    validOperations.includes(update)
  );
  if (!isUpdateValid) {
    return res.status(400).send();
  }
  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.status(200).send(req.user);
  } catch (error) {
    res.status(400).send({
      error: e,
      message: "Something went wrong",
    });
    // console.log(error.message);
  }
};

const deleteRecruiter = async (req, res) => {
  try {
    await req.user.remove();
    res.status(200).send(req.user);
  } catch (error) {
    res.status(400).send({
      error: e,
      message: "Something went wrong",
    });
  }
};

const getCompanyJobs = async (req, res) => {
  try {
    await req.user.populate("jobs");
    res.status(200).send(req.user.jobs);
  } catch (error) {
    res.status(400).send({
      error: error.message,
      message: "Something went wrong",
    });
  }
};

const getCompanyApplicants = async (req, res) => {
  try {
    await req.user.populate("jobs");
    const companyJobs = req.user.jobs;
    const applicants = [];
    companyJobs.forEach(async (j) => {
      const job = await Job.findById(j._id);
      await job.populate("applicants");
      applicants.concat(job.applicants);
    });
    res.status(200).send(applicants);
  } catch (error) {
    res.status(400).send({
      error,
      message: error.message,
    });
  }
};

module.exports = {
  createRecruiter,
  getSelfRecruiter,
  getCompanyById,
  logout,
  updateSelf,
  deleteRecruiter,
  getCompanyJobs,
  getCompanyApplicants,
};
