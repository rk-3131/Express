const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Radhakrushna Mahadik");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.get("/contact", (req, res) => {
  res.send("This is the contact of the Author");
});

app.listen(8000, () => {
  console.log("Listening on the port number 8000");
});
