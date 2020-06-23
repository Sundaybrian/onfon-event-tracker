module.exports = (db) => {
  return async (req, res) => {
    const {
      _id,
      totalStartCount,
      totalStopCount,
      totalServersRunning,
      actualProgramTime,
      totalServersCount,
    } = req.body;

    try {
      const result = await db.collection("Supervisor").insertOne({
        _id,
        totalStartCount,
        totalStopCount,
        totalServersCount,
        totalServersRunning,
        actualProgramTime,
      });

      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  };
};
