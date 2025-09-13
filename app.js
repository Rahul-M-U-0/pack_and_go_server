// imports
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const authJwt = require("./middlewares/jwt");
const errorHandler = require("./middlewares/error_handler");

require("dotenv/config");

// initialization
const app = express();
const env = process.env;
const API = env.API_URL;

app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(cors());
app.use(authJwt());
app.use(errorHandler);

const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");

app.use(`${API}/`, authRouter);
app.use(`${API}/users`, usersRouter);

// start server
const hostname = env.HOST;
const port = env.PORT;

mongoose
  .connect(env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
