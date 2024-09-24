const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.post("/students", (req, res) => {
  const data = new Student(req.body);
  data
    .save()
    .then(() => {
      console.log("It is added into the database");
    })
    .catch((e) => {
      res.send("Error");
      console.log(e);
    });
  res.send("Hello from the other side");
});

app.listen(port, () => {
  console.log(`Listening on the port number ${port}`);
});
