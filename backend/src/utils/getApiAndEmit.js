exports.getApiAndEmit = (socket) => {
  const response = new Date();
  // emit a new message which will be consumed by the client

  socket.emit("dateFromApi", response);
};
