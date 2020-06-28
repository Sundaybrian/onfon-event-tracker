module.exports = (db) => {
  return async (req, res) => {
    try {
      //TODO: add pagination
      const result = await db.collection("logs").find().toArray();
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  };
};
