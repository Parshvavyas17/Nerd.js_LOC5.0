const express = require("express");
const recruiterAuth = require("../middleware/recruiterAuth");
const {
  createRecruiter,
  getSelfRecruiter,
  getCompanyById,
  logout,
  updateSelf,
  deleteRecruiter,
  getCompanyJobs,
  getCompanyApplicants,
} = require("../controllers/recruiter.controller");

const router = express.Router();

/*
    request body
    {
    "name": "SIH 4",
    "email": "sih4@gmail.com",
    "password": "sihcoimbatore",
    "contactNo": 9876543210
    }
*/
router.post("/company", createRecruiter);

/*
    request body
    {
    "email": "sih4@gmail.com",
    "password": "sihcoimbatore"
    }
*/
// router.post('/company/login', async (req, res) => {
//     try {
//         const company = await Company.findByCredentials(req.body.email, req.body.password);
//         const token = await company.generateAuthToken();
//         res.status(200).send({ companyUser: company, companyToken: token });
//     } catch(error) {
//         res.status(400).send(error);
//     }
// });

router.get("/company/self", recruiterAuth, getSelfRecruiter);

router.get("/company/:id", getCompanyById);

router.post("/company/logout", recruiterAuth, logout);

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
router.patch("/company/self", recruiterAuth, updateSelf);

router.delete("/company/self", recruiterAuth, deleteRecruiter);

router.get("/company/self/jobs", getCompanyJobs);

router.get("/company/self/applicants", recruiterAuth, getCompanyApplicants);

module.exports = router;
