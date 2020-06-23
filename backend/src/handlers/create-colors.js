module.exports = (db) => {
  return async (req, res) => {
    const { _id, currentColor, nextColor } = req.body;
    const data = {
      _id,
      currentColor,
      nextColor,
    };

    try {
      const result = await db.collection("Colors").insertOne(data);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  };
};
