const express = require("express");
const UserModel = require("../model/newuser");

const router = new express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/adduser", async (req, res) => {
  try {
    const fName = await req.body.fName;
    const lName = await req.body.lName;
    const email = await req.body.email;
    const gender = await req.body.gender;
    const phone = await req.body.phone;
    const dob = await req.body.dob;
    const age = await req.body.age;
    const adhar = await req.body.adhar;
    const pass1 = await req.body.pass1;
    const pass2 = await req.body.pass2;

    const data = UserModel({
      fName: fName,
      lName: lName,
      email: email,
      gender: gender,
      phone: phone,
      dob: dob,
      age: age,
      adhar: adhar,
      pass1: pass1,
      pass2: pass2,
    });

    const result = await data.save();
    console.log("added to the database");
    res.render("index");
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
