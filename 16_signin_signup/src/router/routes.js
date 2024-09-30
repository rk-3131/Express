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

router.post("/login", async (req, res) => {
  try {
    const email = await req.body.email;
    const pass = await req.body.pass1;

    const result = await UserModel.find({ email: email });
    if (result == null) {
      res.status(200).render("signin");
    }
    if (email == result[0].email && pass == result[0].pass1) {
      res.render("index");
    } else {
      res.render("signin");
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
