const express = require("express");
const cors = require("cors");

module.exports = (app) => {
  // register all middlewares to the app here
  app.use(express.json());
  app.use(cors());
};
