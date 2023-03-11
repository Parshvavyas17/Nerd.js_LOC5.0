const Application = require("../models/application.model");
const Job = require("../models/job.model");

// id is job token
const createApplication = async (req, res) => {
  try {
    const job = await Job.findOne({ _id: req.params.id });
    if (!job) {
      throw new Error("No job with given data.");
    }
    const application = new Application({
      applicant: req.user._id,
      job,
    });
    await application.save();
    res.status(200).send(application);
  } catch (error) {
    res.status(400).send(error);
  }
};

// id is job token
const getJobApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      job: req.params.id,
    }).populate("applicant");
    res.status(200).send(applications);
  } catch (error) {
    res.status(400).send(error);
  }
};

// id is student token
const getStudentApplications = async (req, res) => {
  try {
    const applications = await Application.find({
      applicant: req.params.id,
    }).populate("job");
    res.status(200).send(applications);
  } catch (error) {
    res.status(400).send(error);
  }
};

/*
    request body
    {
        "status": "under review"
    }
*/
// id is job token and appId is application _id
const getJobApplicants = async (req, res) => {
  const update = Object.keys(req.body);
  const validOperation = ["status"];
  const isUpdateValid = update.every((update) =>
    validOperation.includes(update)
  );
  if (!isUpdateValid) {
    return res.status(400).send("Invalid update request.");
  }
  try {
    const application = await Application.findOneAndUpdate(
      { _id: req.params.appId, job: req.job },
      req.body,
      { new: true }
    );
    await application.save();
    res.status(200).send(application);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  createApplication,
  getJobApplications,
  getStudentApplications,
  getJobApplicants,
};
