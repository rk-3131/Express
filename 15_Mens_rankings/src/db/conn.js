const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/100M-Rankings")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
