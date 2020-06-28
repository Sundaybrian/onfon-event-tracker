const router = require("express").Router();

const checkForTask = require("../handlers/check-for-task");

// handlers
const createSupervisor = require("../handlers/create-supervisor");
const fetchSupervisor = require("../handlers/fetch-supervisor");

const createLogs = require("../handlers/create-logs");
const fetchLogs = require("../handlers/fetch-logs");

// validators
const {
  createSupervisorValidator,
  fetchSupervisorValidator,
  createLogsValidator,
  checkForTaskValidator,
} = require("../validators/validators-onfon");

module.exports = (app, db) => {
  router.post("/api/check-for-task", checkForTaskValidator, checkForTask(db));

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

  router.post("/api/create-logs", createLogsValidator, createLogs(db));
  router.get("/api/fetch-logs", fetchLogs(db));

  app.use(router);
};
