const mongoose = require("mongoose");
const validator = require("validator");

const mySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is not in the correct format ");
      }
    },
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

const RkDatabaseCollection = new mongoose.model("RkUsers", mySchema);

module.exports = RkDatabaseCollection;
