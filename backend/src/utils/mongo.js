// _id,
//       totalStartCount,
//       totalStopCount,
//       totalServersRunning,
//       actualProgramTime,
//     totalServersCount,

exports.updateSupervisor = async () => {
  try {
    const res = await global.database.collection("Supervisor").updateOne(
      {
        _id: "supervisor",
      },
      {
        $inc: {
          totalServersRunning: global.startServerCount,
          totalStartCount: 1,
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
};

// programTime,
//       event,
//       message,
//       actualTime,
//       displayMessage,
exports.createLogs = async () => {
  try {
    const data = {
      programTime: global.programTime,
      event: global.startEventName,
      message: `${global.startEventName} ${global.startServerCount} servers`,
      actualTime: global.currentTime,
      displayMessage: `${global.programTime}${global.startEventName} ${global.startServerCount} servers`,
    };

    const res = await global.database.collection("logs").insertOne(data);
  } catch (error) {
    console.error(error);
  }
};
