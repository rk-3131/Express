const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email not in specified format");
      }
    },
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    // validate(value) {
    //   if (!validator.isMobilePhone) {
    //     throw new Error("Number is not in specified format");
    //   }
    // },
  },
  address: {
    type: String,
    required: true,
  },
  //   password: {
  //     type: String,
  //     required: true,
  //     minlength: 6,
  //     maxlength: 12,
  //   },
});

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;
