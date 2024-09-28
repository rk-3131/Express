const express = require("express");
const router = require("./router/routers");
const port = process.env.PORT || 8000;
require("./db/conn");
const app = express();
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Listening on the port number ${port}`);
});
