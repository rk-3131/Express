const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();

const viewPath = path.join(__dirname, "/templates/views");
const partialPath = path.join(__dirname, "/templates/partials");

app.set("view engine", "hbs");
app.set("views", viewPath);

hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
  res.render("index", {
    userName: "Radhakrushna",
    itemName: "home",
  });
});
app.get("/about", (req, res) => {
  res.render("about", { userName: "Radhakrushna", itemName: "about" });
});
app.get("/contact", (req, res) => {
  res.render("contact", { userName: "Radhakrushna", itemName: "contact" });
});
app.get("/service", (req, res) => {
  res.render("service", { userName: "Radhakrushna", itemName: "services" });
});

app.get("*", (req, res) => {
  res.render("error");
});

app.listen(8000, () => {
  console.log("Listening on the port number 8000");
});
