const router = require("express").Router();
const launch = require("../handlers/launch");
const createSupervisor = require("../handlers/create-supervisor");

module.exports = (app, client) => {
  // launch application
  router.post("/api/launch", launch(client));
  router.post("/api/create-supervisor", createSupervisor(client));

  app.use(router);
};
