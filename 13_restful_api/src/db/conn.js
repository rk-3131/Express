const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/students-db ")
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });
