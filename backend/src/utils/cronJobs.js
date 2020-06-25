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

const startTask = (db) => {
  cron.schedule("*/1 * * * * *", function () {
    let servers = Math.floor(Math.random() * (20 - 10 + 1) + 10);
    // console.log(
    //   `running a start every second generating random servers ${servers}----`
    // );

    global.testServer = Math.floor(Math.random() * (20 - 10 + 1) + 10);

    console.log(global.testServer, "-------------", global.currentTime);
  });
};

exports.cronjob = (db) => {
  startTask(db);
};
