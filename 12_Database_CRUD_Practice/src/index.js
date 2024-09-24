const express = require("express");
const hbs = require("hbs");
const path = require("path");
const mongoose = require("mongoose");
const userModel = require("./models/user");

mongoose
  .connect("mongodb://localhost:27017/firstFormDatabase")
  .then(() => console.log("Connection successfull"))
  .catch((err) => {
    console.log(err);
  });

const insertFunction = async () => {
  try {
    const myData = RkDatabaseCollection({
      name: "Dummy",
      dob: Date.now(),
      email: "mahdikrs512@gmail.com",
      pass1: " pass",
      pass2: "pass2",
    });
    const result = await myData.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

insertFunction();

const app = express();
const viewPath = path.join(__dirname, "/views");
const partialPath = path.join(__dirname, "/partials");
const staticPath = path.join(__dirname);
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
  res.render("index");
});

// app.post('/user', (req, res) => {
//   const saveUser = new userModel(req.body)
//   saveUser.save()
// })

app.listen(8000, () => {
  console.log("Listening on the port number 8000");
});
