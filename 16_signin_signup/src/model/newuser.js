const mongoose = require("mongoose");
const validator = require("validator");

const mySchema = mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("The email is not in the correct format");
      }
    },
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  dob: {
    type: Date,
    required: true,
  },
  adhar: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  pass1: {
    type: String,
    required: true,
  },
  pass2: {
    type: String,
    required: true,
  },
});

const UserModel = new mongoose.model("User", mySchema);

module.exports = UserModel;
