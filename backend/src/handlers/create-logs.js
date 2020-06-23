module.exports = (db) => {
  return async (req, res) => {
    const {
      programTime,
      event,
      message,
      actualTime,
      displayMessage,
    } = req.body;

    const data = {
      programTime,
      event,
      message,
      actualTime,
      displayMessage,
    };

    try {
      // TODO: remember to format the diplay message time
      const result = await db.collection("logs").insertOne(data);
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(200).json(result);
    }
  };
};
