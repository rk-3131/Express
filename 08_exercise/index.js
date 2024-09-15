const requests = require("requests");
const hbs = require("hbs");
const path = require("path");
const express = require("express");

const viewPath = path.join(__dirname, "/templates/views");
const partialPath = path.join(__dirname, "/templates/partials");
const app = express();
app.set("view engine", "hbs");
app.set("views", viewPath);

hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
  requests(
    `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=ce01ebf2067c5fdeda9ec64142038e2d`
  )
    .on("data", function (chunk) {
      const objData = JSON.parse(chunk);
      const city = objData.name;
      const temp = objData.main.temp - 273.15;
      res.render("index", {
        city: city,
        temp: temp.toFixed(2),
      });
    })
    .on("end", function (err) {
      if (err) return console.log("connection closed due to errors", err);

      console.log("end");
    });
});

app.listen(8000, () => {
  console.log("Listening on the port number 8000");
});
