const {
  updateSupervisor,
  createLogs,
  updateSupervisorStop,
  createLogsStop,
} = require("../utils/mongo");

module.exports = (db) => {
  // return a valid express handler
  return async (req, res) => {
    const { programTime } = req.body;

    if (programTime == global.startIsHappening) {
      // means start event is taking place
      try {
        const supervisor = await updateSupervisor(db); // update supervisor
        const logger = await createLogs(db); // create logs

        res.json(logger.ops);
      } catch (error) {
        res.status(500).json(error);
        console.error(error);
      }
    }

    if (programTime == global.stopIsHappening) {
      // means stop event is taking place
      try {
        const supervisor = await updateSupervisorStop(db); // update supervisor
        const logger = await createLogsStop(db); // create logs

        res.json(logger.ops);
      } catch (error) {
        res.status(500).json(error);
        console.error(error);
      }
    }

    return res.status(404).json({ message: "no event" });
    // TODO :add for the other events
  };
};
