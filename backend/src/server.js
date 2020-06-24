const cron = require("node-cron");
const socketIo = require("socket.io");
const http = require("http");
const express = require("express");
const setupMiddleware = require("./setup/middlewares");
const setupDatabase = require("./setup/database");
const setupRouter = require("./setup/router");

const getApiAndEmit = require("./utils/getApiAndEmit");

const app = express();
const PORT = process.env.PORT || 5000;

// register middlewares to the express app e.g cors,bodyparser
setupMiddleware(app);

const start = async () => {
  const db = await setupDatabase();

  setupRouter(app, db);

  const server = http.createServer(app);

  const io = socketIo(server);

  let interval;

  io.on("connection", (socket) => {
    console.log("===================");
    console.log("Client connected......");

    if (interval) {
      clearInterval(interval);
    }

    interval = setInterval(() => getApiAndEmit(socket), 1000);

    socket.on("disconnect", () => {
      console.log("Client disconnected......");
      clearInterval(interval);
    });
  });

  server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
};

start().catch((error) => console.error(error));

// // initial routes
// app.use("/api/events", require("./routes/event"));

// const precedence = {
//   start: 1,
//   stop: 2,
//   report: 3,
// };
// const param = "*/2 * * * * *";
// const param2 = "* * * * * *";
// function scheduler(param, param2) {
//   cron.schedule(param, function () {
//     console.log("running a task every 1 second");
//   });

//   cron.schedule(param2, function () {
//     console.log("running a task every 2econd");
//   });
// }

// scheduler(param, param2);
