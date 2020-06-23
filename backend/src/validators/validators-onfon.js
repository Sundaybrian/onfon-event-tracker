const { validateAll } = require("indicative/validator");

exports.createSupervisorValidator = async (req, res, next) => {
  try {
    await validateAll(req.body, {
      _id: "required",
      totalServersCount: "required|integer",
      totalServersRunning: "required|integer",
      totalStartCount: "required|integer",
      totalStopCount: "required|integer",
      actualProgramTime: "date",
    });

    return next();
  } catch (error) {
    return res.status(422).json(error);
  }
};

exports.fetchSupervisorValidator = async (req, res, next) => {
  try {
    await validateAll(req.params, {
      id: "required|string",
    });

    return next();
  } catch (error) {
    return res.status(422).json(error);
  }
};

exports.createColorsValidator = async (req, res, next) => {
  try {
    await validateAll(req.body, {
      _id: "required|string",
      currentColor: "required|string",
      nextColor: "string",
    });

    return next();
  } catch (error) {
    return res.status(422).json(error);
  }
};
