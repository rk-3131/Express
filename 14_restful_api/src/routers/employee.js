const express = require("express");
const router = new express.Router();
const Employee = require("../module/employees");

router.get("/", (req, res) => {
  res.send("This is the test homepage");
});

router.get("/emp", async (req, res) => {
  try {
    const data = await Employee.find();
    res.send(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});

router.get("/emp/:id", async (req, res) => {
  try {
    const data = await Employee.findById({ _id: req.params.id });
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

router.post("/emp", async (req, res) => {
  try {
    const data = await new Employee(req.body);
    const result = await data.save();
    res.send("Data saved successfully");
  } catch (err) {
    console.log(err);
  }
});

router.delete("/emp/:id", async (req, res) => {
  try {
    const data = await Employee.findByIdAndDelete({ _id: req.params.id });
    console.log("Deleted data");
    res.send("Deleted data");
  } catch (err) {
    console.log(err);
  }
});

router.patch("/emp/:id", async (req, res) => {
  try {
    const result = await Employee.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.send("Updated");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
