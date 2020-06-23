const router = require("express").Router();
const launch = require("../handlers/launch");
const createSupervisor = require("../handlers/create-supervisor");

const { createSupervisorValidator } = require("../validators/validators-onfon");

module.exports = (app, client) => {
  // launch application
  router.post("/api/launch", launch(client));
  router.post(
    "/api/create-supervisor",
    createSupervisorValidator,
    createSupervisor(client)
  );

  app.use(router);
};
