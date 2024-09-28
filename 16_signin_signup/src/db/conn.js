const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/UserDatabase")
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((e) => {
    console.log(e);
  });
