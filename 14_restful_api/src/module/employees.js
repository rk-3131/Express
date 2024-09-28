const mongoose = require("mongoose");
const validator = require("validator");

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true,
    unique: true,
  },
  email: {
    type: String,
    // required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("The email is not in required format");
      }
    },
  },
  city: {
    type: String,
  },
  job: {
    type: String,
  },
});

const employeeModel = new mongoose.model("Employee", employeeSchema);

module.exports = employeeModel;
