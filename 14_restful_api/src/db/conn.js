const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/employee-db")
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
