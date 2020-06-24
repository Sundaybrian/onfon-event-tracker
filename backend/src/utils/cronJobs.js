const cron = require("node-cron");

// initial routes
// app.use("/api/events", require("./routes/event"));

// const precedence = {
//   START: 1,
//   STOP: 2,
//   REPORT: 3,
// };

const tasks = [
  {
    task: "START",
    interval: "*/1 * * * * *",
    precedence: 1,
  },
  {
    task: "STOP",
    interval: "*/2 * * * * *",
    precedence: 2,
  },
  {
    task: "REPORT",
    interval: "*/5 * * * * *",
    precedence: 3,
  },
];

const STARTPARAM = "*/1 * * * * *"; // run every 30sec
const STOPPARAM = "*/4 * * * * *"; // run every 40sec
const REPORTPARAM = "*/5 * * * * *"; // run every 50sec

// function scheduler(param, param2) {
//   cron.schedule(param, function () {
//     console.log("running a task every 1 second");
//   });
// let startTask = cron.schedule(STARTPARAM, function () {
//   console.log("running a task every 1econd");
// });

// scheduler(param, param2);

function scheduleJob(counter) {
  let job = `${tasks[counter].task}`;
  job = cron.schedule(tasks[counter].interval, function () {
    console.log(`running a ${job} every ${tasks[counter].interval}`);
  });

  return job;
}

exports.cronJob = () => {
  for (i = 0; i < tasks.length; i++) {
    scheduleJob(i);
  }
};
