const mongoose = require("mongoose");
// const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const recruiterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      //   unique: true,
      lowercase: true,
      //   validate(value) {
      //     if (!validator.isEmail(value)) {
      //       throw new Error("Invalid email.");
      //     }
      //   },
    },
    mobileNo: {
      type: Number,
      trim: true,
      //   required: true,
      //   validate(value) {
      //     if (!validator.isMobilePhone(`${value}`)) {
      //       throw new Error("Invalid phone number.");
      //     }
      //   },
    },
    noOfEmp: {
      type: Number,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    // typeOfCompany: {
    //   type: String,
    //   trim: true,
    //   enum: ["PbLC", "PrLc", "JVC", "PF", "OPC", "SP", "BO", "NGO"],
    // },
    website: {
      type: String,
      trim: true,
      //   validate(value) {
      //     if (!validator.isURL(value)) {
      //       throw new Error("Invalid website URL.");
      //     }
      //   },
    },
    avatar: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    companyInfo: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
      trim: true,
    },
    token: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

recruiterSchema.virtual("jobs", {
  ref: "Job",
  localField: "_id",
  foreignField: "recruiter",
});

recruiterSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign({ _id: this._id.toString() }, process.env.JWT_SECRET);
  this.token = token;
  await this.save();
  return token;
};

recruiterSchema.methods.toJSON = function () {
  const recruiterObject = this.toObject();
  delete recruiterObject.password;
  delete recruiterObject.tokens;
  return recruiterObject;
};

recruiterSchema.statics.findByCredentials = async (email, password) => {
  const recruiter = await Recruiter.findOne({ email });
  if (!recruiter) {
    console.log("No User of Recruiter found");
    return null;
  }
  const isMatch = await bcrypt.compare(password, recruiter.password);
  if (!isMatch) {
    console.log("Unable to login of recruiter");
    return null;
  }
  return recruiter;
};

recruiterSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

const Recruiter = mongoose.model("Recruiter", recruiterSchema);

module.exports = Recruiter;
