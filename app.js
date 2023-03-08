const express = require("express");
const app = express();
const routes = require("./routes/routes");
const connectDB = require("./db/connect");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/error-handler");
require("dotenv").config();

const port = process.env.PORT || 3000;

// middleware
app.use(express.json());

// Static files
app.use(express.static("./public"));

// routes
app.use("/api/v1/tasks", routes);
app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(process.env.DB_URL);
    app.listen(port, () => {
      console.log(`Listening on ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
