const express = require("express");
const {
  createApplication,
  getJobApplications,
  getStudentApplications,
  getJobApplicants,
} = require("../controllers/application.controller");
const userAuth = require("../middleware/userAuth");
const jobAuth = require("../middleware/jobAuth");

const router = express.Router();

// id is job token
router.post("/:id", userAuth, createApplication);

// id is job token
router.get("/jobs/:id", getJobApplications);

// id is student token
router.get("/students/:id", getStudentApplications);

/*
    request body
    {
        "status": "under review"
    }
*/
// id is job token and appId is application _id
router.patch("/jobs/:id/students/:appId", jobAuth, getJobApplicants);

module.exports = router;
