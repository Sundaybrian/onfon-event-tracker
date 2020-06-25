const cron = require("node-cron");

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

const startTask = () => {
  cron.schedule("*/1 * * * * *", function () {
    //start globals
    global.startEventName = "START";
    global.startServerCount = Math.floor(Math.random() * (20 - 10 + 1) + 10);
    global.startIsHappening = global.programTime;

    console.log(global.startServerCount);
  });
};

exports.cronjob = () => {
  startTask();
};
