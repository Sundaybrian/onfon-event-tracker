module.exports = async (db) => {
  try {
    const res = await db
      .collection("Supervisor")
      .updateOne(
        { _id: "supervisor" },
        { $set: { actualProgramTime: new Date().toISOString() } },
        function (err, response) {
          if (err) throw err;
          console.log("Done...creating time ");
        }
      );
  } catch (error) {
    console.error(error);
  }
};
