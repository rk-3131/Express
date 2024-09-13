const express = require("express");
const path = require("path");

const app = express();

console.log(path.join(__dirname, "../public/"));

const static_path = path.join(__dirname, "../public/");

app.use(express.static(static_path));

app.listen(3000, () => {
  console.log("Listening on the port number 3000");
});
