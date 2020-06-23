const express = require("express");

module.exports = (app) => {
  // register all middlewares to the app here
  app.use(express.json());
};
