const router = require("express").Router();
const launch = require("../handlers/launch");
const createSupervisor = require("../handlers/create-supervisor");
const createColors = require("../handlers/create-colors");

const {
  createSupervisorValidator,
  createColorsValidator,
} = require("../validators/validators-onfon");

module.exports = (app, db) => {
  // launch application
  router.post("/api/launch", launch(db));

  router.post(
    "/api/create-supervisor",
    createSupervisorValidator,
    createSupervisor(db)
  );

  router.post("/api/create-colors", createColorsValidator, createColors(db));

  app.use(router);
};
