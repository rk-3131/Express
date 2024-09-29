require("./db/conn");
const path = require("path");
const User = require("./model/newuser");
const express = require("express");
const router = require("./router/routes");
const hbs = require("hbs");
const port = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.set("view engine", "hbs");
console.log(path.join(__dirname, "../public/templates/partials"));
const viewPath = path.join(__dirname, "../public/templates/views");
const staticPath = path.join(__dirname, "../public/templates");
const partialPath = path.join(__dirname, "../public/templates/partials");
app.set("views", viewPath);
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));

app.listen(port, () => {
  console.log(`Process started at port number ${port}`);
});
