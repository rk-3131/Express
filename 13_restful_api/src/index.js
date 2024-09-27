const express = require("express");
require("./db/conn");
// const Student = require("./models/students");
const port = process.env.PORT || 3000;
const app = express();
const myRouter = require("./routers/student");
app.use(express.json());
app.use(myRouter);

app.listen(port, () => {
  console.log(`Listening on the port number ${port}`);
});
