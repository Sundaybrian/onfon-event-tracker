const socketIo = require("socket.io");
const http = require("http");
const express = require("express");
const setupMiddleware = require("./setup/middlewares");
const setupDatabase = require("./setup/database");
const setupRouter = require("./setup/router");

const logTimeStarted = require("./utils/logTimeStarted");
const { cronjob } = require("./utils/cronJobs");

const app = express();
const PORT = process.env.PORT || 5000;

// register middlewares to the express app e.g cors,bodyparser
setupMiddleware(app);

const start = async () => {
  const db = await setupDatabase();
  global.database = db; //to be used where db is not accesible

  setupRouter(app, db);

  // log time started
  await logTimeStarted(db);

  const server = http.createServer(app);
  const io = socketIo(server);

  let interval;
  let totalSeconds = 43200; // rep 12hrs

  io.on("connection", (socket) => {
    console.log("New Client connected......", new Date());

    if (interval) {
      clearInterval(interval);
    }

    // lauch cronjob here
    cronjob();
    // launch time logged here

    interval = setInterval(() => getApiAndEmit(socket), 1000);

    socket.on("disconnect", () => {
      console.log("Client disconnected......");
      clearInterval(interval);
    });
  });

  const getApiAndEmit = (socket) => {
    ++totalSeconds;
    var hour = Math.floor(totalSeconds / 3600); //12
    var minute = Math.floor((totalSeconds - hour * 3600) / 60); // 43380 - 43300 = 180/60 = 3mins
    var seconds = totalSeconds - (hour * 3600 + minute * 60);
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (seconds < 10) seconds = "0" + seconds;

    let response = {
      hour,
      minute,
      seconds,
    };

    // set global variables and update program time and current time everywhere
    global.programTime = hour + ":" + minute + ":" + seconds;
    let d = new Date();
    global.currentTime = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

    // emit a new message which will be consumed by the client
    socket.emit("dateFromApi", response);
  };

  server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
};

start().catch((error) => console.error(error));
