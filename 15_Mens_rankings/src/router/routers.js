const express = require("express");
const router = new express.Router();
const Ranking = require("../models/man");

router.get("/", (req, res) => {
  res.send("This is the test page");
});

router.get("/100m", async (req, res) => {
  try {
    const data = await Ranking.find().sort({ rank: 1 });
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

router.post("/100m", async (req, res) => {
  try {
    const data = new Ranking(req.body);
    const result = await data.save();
    res.send("Added to the database");
  } catch (err) {
    console.log(err);
  }
});

router.patch("/100m/:id", async (req, res) => {
  try {
    const data = await Ranking.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.send("Updated");
  } catch (err) {
    console.log(err);
  }
});

router.delete("/100m/:id", async (req, res) => {
  try {
    const data = await Ranking.findByIdAndDelete({ _id: req.params.id });
    res.send("Deleted");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
