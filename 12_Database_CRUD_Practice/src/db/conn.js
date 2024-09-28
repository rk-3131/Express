const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/myFirstForm")
  .then(() => {
    console.log("Connected successfully to the database");
  })
  .catch((err) => {
    console.log(`There was error while connecting to database`);
  });
