const express = require("express");
const path = require("path");

const app = express();

const static_route = path.join(__dirname, "../public");

app.use(express.static(static_route));

app.listen(3000, () => {
  console.log("listen on the port number 3000");
});
