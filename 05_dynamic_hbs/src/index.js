const express = require("express");
const path = require("path");
const hbs = require("hbs");
// hbs is required to host dynamic pages on the express or node

const app = express();
// the app is created using the express method as usual

// const staticPath = path.join(__dirname, "../public");
// the path of the folder is created for the static website to be hosted

// app.use(express.static(staticPath));
// this will be used for the static site to be added into the express

app.set("view engine", "hbs");
// here engine needs to be setted for the dynamic site to be hosted in our case we have selected it as hbs

app.get("/", (req, res) => {
  res.render("index.hbs", {
    myName: "Radhakrushna Shamrao Mahadik",
  });
});
// everything is same as of the rendering simple html but here we have to use the app.render to make sure that the the hbs will get the index.hbs file from the viws folder
// creation of the views folder is neccessary for the dynamic site to be hosted by hbs view engine
// the views folder need to be created in the same folder in which our index.js is located

app.get("/", (req, res) => {
  res.send("This will be dynamic page");
});

app.listen(3000, () => {
  console.log("Listening on the port number 3000");
});
