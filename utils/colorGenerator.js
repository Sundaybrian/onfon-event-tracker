const randomColor = require("randomcolor");

exports.randomColorGen = async (color) => {
  const current = color;
  const next = randomColor();

  if (current == next) return this.randomColorGen(current);

  return next;
};
