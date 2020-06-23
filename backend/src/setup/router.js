const router = require("express").Router();
const launch = require("../handlers/launch");

module.exports = (app, client) => {
  // launch application
  router.post("/api/launch", launch(client));

  app.use(router);
};
