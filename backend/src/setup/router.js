const router = require("express").Router();

const launch = require("../handlers/launch");

// handlers
const createSupervisor = require("../handlers/create-supervisor");
const fetchSupervisor = require("../handlers/fetch-supervisor");
const createColors = require("../handlers/create-colors");

const createLogs = require("../handlers/create-logs");
const fetchLogs = require("../handlers/fetch-logs");

// validators
const {
  createSupervisorValidator,
  fetchSupervisorValidator,
  createColorsValidator,
  createLogsValidator,
} = require("../validators/validators-onfon");

module.exports = (app, db) => {
  // launch application
  router.post("/api/launch", launch());

  router.post(
    "/api/create-supervisor",
    createSupervisorValidator,
    createSupervisor(db)
  );
  router.get(
    "/api/fetch-supervisor/:id",
    fetchSupervisorValidator,
    fetchSupervisor(db)
  );

  router.post("/api/create-colors", createColorsValidator, createColors(db));

  router.post("/api/create-logs", createLogsValidator, createLogs(db));
  router.get("/api/fetch-logs", fetchLogs(db));

  app.use(router);
};
