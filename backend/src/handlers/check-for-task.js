const {
  updateSupervisor,
  createLogs,
  updateSupervisorStop,
  createLogsStop,
  createLogsReport,
} = require("../utils/mongo");

const { randomColorGen } = require("../utils/colorGenerator");

module.exports = (db) => {
  // return a valid express handler
  return async (req, res) => {
    const { programTime, wallColor, faceColor, hourColor } = req.body;

    if (programTime == global.startIsHappening && global.startBool == true) {
      // means start event is taking place
      try {
        const supervisor = await updateSupervisor(db); // update supervisor
        const logger = await createLogs(db); // create logs

        const wall_color = await randomColorGen(wallColor);

        // clean up
        global.startBool = false;

        res.status(200).json({ result: logger.ops, wall_color });
      } catch (error) {
        res.status(500).json(error);
        console.error(error);
      }
    }

    if (programTime == global.stopIsHappening && global.stopBool == true) {
      // means stop event is taking place
      try {
        const supervisor = await updateSupervisorStop(db); // update supervisor
        const logger = await createLogsStop(db); // create logs

        const face_color = await randomColorGen(faceColor);

        global.stopBool = false;

        res.status(200).json({ result: logger.ops, face_color });
      } catch (error) {
        res.status(500).json(error);
        console.error(error);
      }
    }

    if (programTime == global.reportIsHappening && global.reportBool == true) {
      // means report event is taking place
      try {
        const logger = await createLogsReport(db); // create logs

        const hour_color = await randomColorGen(hourColor);
        global.reportBool = false;

        res.status(200).json({ result: logger.ops, hour_color });
      } catch (error) {
        res.status(500).json(error);
        console.error(error);
      }
    }

    return res.status(404).json({ message: "no event" });
    // TODO :add for the other events
  };
};
