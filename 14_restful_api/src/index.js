const express = require("express");
require("./db/conn");
const myRouter = require("./routers/employee");

const port = process.env.PORT || 8000;
const app = express();
// here app.use express.json has to be first as first of it should know that the data has to be parsed
app.use(express.json());
app.use(myRouter);

app.listen(port, () => {
  console.log(`Listening on the port number ${port}`);
});
