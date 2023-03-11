const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const graduationSchema = new mongoose.Schema({
  score: {
    type: Number,
  },
  college: {
    type: String,
  },
  startYear: {
    type: Number,
  },
  endYear: {
    type: Number,
  },
  gradStatus: {
    type: String,
    enum: ["Pursuing", "Completed"],
  },
});

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    gender: {
      type: String,
      enum: ["M", "F"],
      trim: true,
    },
    mobileNo: {
      type: Number,
      required: true,
      validate(value) {
        if (!validator.isMobilePhone(`${value}`)) {
          throw new Error("Invalid phone number.");
        }
      },
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid Email");
        }
      },
    },
    age: {
      type: Number,
      default: 0,
      validate(value) {
        if (value < 0) {
          throw new Error("Age must be a positive number.");
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error('Password cannot contain "password"in it.');
        }
      },
    },
    token: {
      type: String,
    },
    avatar: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    githubLink: {
      type: String,
      trim: true,
      // validate(value) {
      //   if (!validator.isURL(value)) {
      //     throw new Error("Invalid website URL.");
      //   }
      // },
    },
    portfolioLink: {
      type: String,
      trim: true,
      // validate(value) {
      //   if (!validator.isURL(value)) {
      //     throw new Error("Invalid website URL.");
      //   }
      // },
    },
    linkedInLink: {
      type: String,
      trim: true,
      // validate(value) {
      //   if (!validator.isURL(value)) {
      //     throw new Error("Invalid website URL.");
      //   }
      // },
    },
    // behanceLink: {
    //   type: String,
    //   trim: true,
    // validate(value) {
    //   if (!validator.isURL(value)) {
    //     throw new Error("Invalid website URL.");
    //   }
    // },
    // },
    exp: [
      {
        title: {
          type: String,
        },
        workspace: {
          type: String,
        },
        duration: {
          type: Number,
        },
      },
    ],
    skillSet: [
      {
        name: {
          type: String,
        },
        level: {
          type: Number,
        },
      },
    ],
    skills: String,
    currentCity: {
      type: String,
      trim: true,
    },
    graduation: graduationSchema,
    ssc: graduationSchema,
    hsc: graduationSchema,
    title: String,
  },
  {
    timestamps: true,
  }
);

// studentSchema.virtual("applications", {
//   ref: "Application",
//   localField: "_id",
//   foreignField: "applicant",
// });

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user.id.toString() }, process.env.JWT_SECRET);
  user.token = token;
  await user.save();
  return token;
};

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.token;
  return userObject;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid email.");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login.");
  }
  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
