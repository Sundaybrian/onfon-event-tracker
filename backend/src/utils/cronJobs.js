const cron = require("node-cron");
const { getServerCount } = require("../utils/mongo");

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
  cron.schedule("*/30 * * * * *", function () {
    //start globals
    global.startEventName = "START";
    global.startServerCount = Math.floor(Math.random() * (20 - 10 + 1) + 10);
    global.startIsHappening = global.programTime;
  });
};

const stopTask = (db) => {
  cron.schedule("*/1 * * * * *", async function () {
    //start globals
    let count = await getServerCount(db);
    global.stopEventName = "STOP";
    global.stopServerCount = Math.floor(Math.random() * (count - 5 + 1) + 5);
    global.stopIsHappening = global.programTime;
  });
};

exports.cronjob = (db) => {
  // startTask();
  stopTask(db);
};
