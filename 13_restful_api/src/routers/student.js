const express = require("express");
// const Student = require("./models/students");
const Student = require("../models/students");
const router = new express.Router();

router.get("/", (req, res) => {
  res.send("This is home page");
});

// router.post("/students", (req, res) => {
//   const data = new Student(req.body);
//   data
//     .save()
//     .then(() => {
//       console.log("It is added into the database");
//     })
//     .catch((e) => {
//       res.send("Error");
//       console.log(e);
//     });
//   res.send("Hello from the other side");
// });

router.post("/students", (req, res) => {
  const createFunction = async () => {
    try {
      const data = await new Student(req.body);
      const result = await data.save();
      console.log("Added into the database");
    } catch (err) {
      console.log(err);
    }
  };
  createFunction();
  res.send("Hello from the other side");
});

router.get("/students", async (req, res) => {
  try {
    const data = await Student.find();
    res.send(data);
    console.log("Data fetched successfully");
  } catch (err) {
    console.log(err);
  }
});

router.get("/students/:id", async (req, res) => {
  try {
    const result = await Student.findById({ _id: req.params.id });
    res.send(result);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
});

router.get("/students/:name", async (req, res) => {
  try {
    const result = await Student.find({ name: req.params.name });
    res.send(result);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
});

router.patch("/students/:id", async (req, res) => {
  try {
    const updateStudent = await Student.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.send(updateStudent);
    console.log("Updated");
  } catch (err) {
    console.log(err);
  }
});

router.delete("/students/:id", async (req, res) => {
  try {
    const result = await Student.findByIdAndDelete(req.params.id);
    console.log("Deleted Succesfully");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
