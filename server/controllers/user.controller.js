const User = require("../models/user.model");

const login = async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (error) {
    res.status(400).send();
  }
};

const signup = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

const logout = async (req, res) => {
  try {
    delete req.user.token;
    await req.user.save();
    res.status(200).send();
  } catch (error) {
    res.status(500).send();
  }
};

const getSelf = async (req, res) => {
  try {
    res.status(200).send({ user: req.user, token: req.user.token });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateSelf = async (req, res) => {
  const updates = Object.keys(req.body);
  const validOperations = [
    "firstName",
    "lastName",
    "age",
    "password",
    "gender",
    "mobileNo",
    "avatar",
    "isAdmin",
    "githubLink",
    "portfolioLink",
    "linkedInLink",
    "exp",
    "skills",
    "skillSet",
    "currentCity",
    "graduation",
    "hsc",
    "ssc",
    "title",
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
    res.status(500).send(error);
  }
};

module.exports = { login, signup, logout, getSelf, getAllUsers, updateSelf };
