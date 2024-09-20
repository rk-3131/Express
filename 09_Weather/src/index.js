const express = require("express");
const path = require("path");
const hbs = require("hbs");
// const partials = require("partials");

const app = express();
const port = 8000;

app.set("view engine", "hbs");
const staticPath = path.join(__dirname, "");

app.use(express.static(staticPath));

const partialPath = path.join(__dirname, "/partials");
console.log(partialPath);

hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("*", (req, res) => {
  res.send("404 Cannot fetch the page");
});

app.listen(port, () => {
  console.log(`Listening on the port number ${port}`);
});
