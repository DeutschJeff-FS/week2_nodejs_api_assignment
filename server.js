const express = require("express");
require("dotenv").config();

const { jokeService, jokeServiceById } = require("./services/jokeService");

const app = express();

// GET for localhost:3000/
app.get("/", (req, res, next) => {
  res.status(200).send("Service is up!!");
});

// GET external service
app.get("/joke", (req, res, next) => {
  jokeService()
    .then((result) => res.status(200).json(result))
    .catch((err) =>
      res.status(err.status || 501).json({
        error: {
          message: err.message,
          status: err.status,
          method: req.method,
        },
      })
    );
});

// GET by ID external service
app.get("/joke/:jokeId", (req, res, next) => {
  const jokeId = req.params.jokeId;
  jokeServiceById(jokeId)
    .then((result) => res.status(200).json(result))
    .catch((err) =>
      res.status(err.status || 501).json({
        error: {
          message: err.message,
          status: err.status,
          method: req.method,
        },
      })
    );
});

// Error handling middleware
app.use((req, res, next) => {
  const error = new Error("NOT FOUND!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
      method: req.method,
    },
  });
});

// Check if server is up and running
app.listen(process.env.port, () => {
  console.log(`Server starting on port ${process.env.port}`);
});
