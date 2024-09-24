const mongoose = require("mongoose");
const validator = require("validator");

const form = document.getElementById("myForm");
const name = document.getElementById("eName");
const dob = document.getElementById("dob");
const email = document.getElementById("email");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const mybtn = document.getElementById("mybtn");

mongoose
  .connect("mongodb://localhost:27017/firstFormDatabase")
  .then(() => console.log("Connection successfull"))
  .catch((err) => {
    console.log(err);
  });

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

const insertFunction = async () => {
  try {
    const myData = RkDatabaseCollection({
      name: "Dummy",
      dob: Date.now(),
      email: "mahdikrs512@gmail.com",
      pass1: " pass",
      pass2: "pass2",
    });
    const result = myData.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

const afterSubmit = async (e) => {
  e.preventDefault();
  console.log(name.value);
  console.log(dob.value);
  console.log(email.value);
  console.log(pass1.value);
  console.log(pass2.value);
};

mybtn.addEventListener("click", afterSubmit);
