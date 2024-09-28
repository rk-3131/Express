const express = require("express");
const hbs = require("hbs");
const path = require("path");
const port = process.env.PORT || 8000;
require("./db/conn");
const mongoose = require("mongoose");
const RkDatabaseCollection = require("./models/user");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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

app.get("/user", async (req, res) => {
  try {
    const data = await RkDatabaseCollection.find();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});
app.post("/user", async (req, res) => {
  try {
    const ename = await req.body.eName;
    const date = await req.body.dob;
    const email = await req.body.email;
    const pass1 = await req.body.pass1;
    const pass2 = await req.body.pass2;

    const data = new RkDatabaseCollection({
      name: ename,
      dob: date,
      email: email,
      pass1: pass1,
      pass2: pass2,
    });

    const result = await data.save();
    res.render("index");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Listening on the port number ${port}`);
});
