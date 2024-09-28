const mongoose = require("mongoose");

const mySchema = mongoose.Schema({
  rank: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  event: {
    type: String,
    default: "100M",
  },
});

const Rankings = new mongoose.model("Ranking", mySchema);

module.exports = Rankings;
