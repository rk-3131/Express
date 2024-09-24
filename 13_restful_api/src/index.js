const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is home page");
});

// app.post("/students", (req, res) => {
//   const data = new Student(req.body);
//   data
//     .save()
//     .then(() => {
//       console.log("It is added into the database");
//     })
//     .catch((e) => {
//       res.send("Error");
//       console.log(e);
//     });
//   res.send("Hello from the other side");
// });

app.post("/students", (req, res) => {
  const createFunction = async () => {
    try {
      const data = await new Student(req.body);
      const result = await data.save();
      console.log("Added into the database");
    } catch (err) {
      console.log(err);
    }
  };
  createFunction();
  res.send("Hello from the other side");
});

app.get("/students", async (req, res) => {
  try {
    const data = await Student.find();
    res.send(data);
    console.log("Data fetched successfully");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Listening on the port number ${port}`);
});
