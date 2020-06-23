module.exports = (db) => {
  return async (req, res) => {
    const { id } = req.params;

    try {
      const result = await db.collection("Supervisor").findOne({ _id: id });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  };
};
