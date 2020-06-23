const { validateAll } = require("indicative/validator");

exports.createSupervisorValidator = async (req, res, next) => {
  try {
    await validateAll(req.body, {
      _id: "required",
      totalServers: "required",
      totalStartCount: "required",
      totalStopCount: "required",
    });

    return next();
  } catch (error) {
    return res.status(422).json(error);
  }
};
