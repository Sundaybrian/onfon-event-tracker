module.exports = () => {
  // return a valid express handler
  return (req, res) => {
    res.send({ message: "we are live...." }).status(200);
  };
};
