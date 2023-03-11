const express = require("express");
const {
  createApplication,
  getJobApplications,
  getStudentApplications,
  getJobApplicants,
} = require("../controllers/application.controller");
const userAuth = require("../middleware/userAuth");
const recruiterAuth = require("../middleware/recruiterAuth");
const jobAuth = require("../middleware/jobAuth");

const router = express.Router();

// id is job token
router.post("/applications/:id", userAuth, createApplication);

// id is job token
router.get("/applications/jobs/:id", getJobApplications);

// id is student token
router.get("/applications/students/:id", getStudentApplications);

/*
    request body
    {
        "status": "under review"
    }
*/
// id is job token and appId is application _id
router.patch(
  "/applications/jobs/:id/students/:appId",
  jobAuth,
  getJobApplicants
);

module.exports = router;
