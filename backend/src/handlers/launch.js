module.exports = () => {
  // return a valid express handler
  return (req, res) => {
    const { server } = req.body;
    if (global.testServer == server) {
      res.send({ message: "we are live....son of God" }).status(200);
    }
  };
};
