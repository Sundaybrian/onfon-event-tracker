module.exports = (db) => {
  return async (req, res) => {
    const { _id } = req.body;

    try {
      const result = await db.collection("Supervisor").findOne({ _id });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  };
};
