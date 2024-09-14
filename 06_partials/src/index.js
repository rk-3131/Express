const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();

const template_path = path.join(__dirname, "/templates/views");
const partial_path = path.join(__dirname, "/templates/partials");
console.log(partial_path);
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);

app.get("/", (req, res) => {
  res.render("index", {
    user: "RK",
  });
});

app.get("/about", (req, res) => {
  res.render("about", { user: "RK" });
});
app.get("/contact", (req, res) => {
  res.render("contact", { user: "RK" });
});
app.get("/services", (req, res) => {
  res.render("services", { user: "RK" });
});

app.listen(8000, () => {
  console.log("Listening on the port number 8000");
});
