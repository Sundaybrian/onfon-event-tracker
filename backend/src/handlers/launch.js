module.exports = (client) => {
  // return a valid express handler
  return (req, res) => {
    res.json({ message: "we are live...." });
  };
};
