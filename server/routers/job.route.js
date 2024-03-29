const express = require("express");
const recruiterAuth = require("../middleware/recruiterAuth");
const jobAuth = require("../middleware/jobAuth");
const {
  getSelfJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJobById,
  getJobApplicants,
} = require("../controllers/job.controller");

const router = express.Router();

router.get("/self", recruiterAuth, getSelfJobs);

router.get("/:id", getJobById);

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
router.post("/", recruiterAuth, createJob);

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
router.patch("/:id", jobAuth, updateJob);

router.delete("/:id", jobAuth, deleteJobById);

router.get("/:id/applications", jobAuth, getJobApplicants);

module.exports = router;
