const cron = require("node-cron");
const mongodb = require("mongodb");
const express = require("express");
const setupMiddleware = require("./setup/middlewares");

const app = express();

// register middlewares to the app
setupMiddleware(app);

// Middleware
// app.use(express.json());

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started`);
});
