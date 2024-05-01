const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userController = require("./routes/Users");
require("dotenv").config();

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.error(error));

const app = express();
const port = process.env.PORT;

app.use(cors);
app.use(userController);

app.listen(port, () => console.log(`Connected to port: ${port}`));
