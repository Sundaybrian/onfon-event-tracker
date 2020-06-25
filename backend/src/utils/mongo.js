// _id,
//       totalStartCount,
//       totalStopCount,
//       totalServersRunning,
//       actualProgramTime,
//     totalServersCount,

exports.updateSupervisor = async (db) => {
  try {
    const result = await db.collection("Supervisor").updateOne(
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

    return result;
  } catch (error) {
    console.error(error);
  }
};

// programTime,
//       event,
//       message,
//       actualTime,
//       displayMessage,
exports.createLogs = async (db) => {
  try {
    const data = {
      programTime: global.programTime,
      event: global.startEventName,
      message: `${global.startEventName} ${global.startServerCount} servers`,
      actualTime: global.currentTime,
      displayMessage: `${global.programTime} ${global.startEventName} ${global.startServerCount} servers`,
    };

    const result = await db.collection("logs").insertOne(data);
    return result;
  } catch (error) {
    console.error(error);
  }
};

exports.getServerCount = async (db) => {
  try {
    const result = await db.collection("Supervisor").findOne(
      {
        _id: "supervisor",
      },
      {
        totalServersRunning: 1,
      }
    );

    return result["totalServersRunning"];
  } catch (error) {
    console.error(error);
  }
};
