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
  cron.schedule("*/30 * * * * *", async function () {
    //start globals
    global.startEventName = "START";
    global.startServerCount = Math.floor(Math.random() * (20 - 10 + 1) + 10);
    global.startIsHappening = global.programTime;
    global.startBool = true;
  });
};

const stopTask = (db) => {
  cron.schedule("*/40 * * * * *", async function () {
    //stop globals
    let count = await getServerCount(db);
    global.stopEventName = "STOP";
    global.stopServerCount = Math.floor(Math.random() * (count - 5 + 1) + 5);
    global.stopIsHappening = global.programTime;
    global.stopBool = true;
  });
};

const reportTask = (db) => {
  cron.schedule("*/50 * * * * *", async function () {
    //report globals
    let count = await getServerCount(db);
    global.reportEventName = "REPORT";
    global.reportIsHappening = global.programTime;
    global.reportServerCount = count;
    global.reportBool = true;
  });
};

exports.cronjob = (db) => {
  startTask();
  stopTask(db);
  reportTask(db);
};
