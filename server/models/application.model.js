const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now,
      //   required: true,
    },
    status: {
      type: String,
      enum: ["selected", "not selected", "under review", "applied"],
      default: "applied",
      //   required: true,
    },
    job: {
      type: mongoose.Schema.Types.ObjectId,
      //   required: true,
      ref: "Job",
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      //   required: true,
      ref: "User",
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recruiter",
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
