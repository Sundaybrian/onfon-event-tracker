import React, { useEffect, useState, useContext } from "react";
import socketIOClient from "socket.io-client";

import TaskContext from "./context/task/taskContext";
import Logs from "./components/Logs";
import ClockComponent from "./components/ClockComponent";

const App = () => {
  const context = useContext(TaskContext);
  const {
    setProgramTime,
    programTime,
    checkForTask,
    wallColor,
    faceColor,
    hourColor,
    displayMessage,
    loadReports,
    setWallClockSeconds,
  } = context;

  useEffect(() => {
    const socket = socketIOClient("/");
    socket.on("dateFromApi", (data) => {
      let response = data.hour + ":" + data.minute + ":" + data.seconds;
      setProgramTime(response);
      setWallClockSeconds(data.totalSeconds);

      const interval = setInterval(
        () =>
          checkForTask({
            programTime: response,
            wallColor,
            faceColor,
            hourColor,
          }),
        5000
      );

      // clear interval after unmounting
      return () => clearInterval(interval);
    });

    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
  }, []);

  const fetchReports = () => {
    // fetch all logs
    loadReports();
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div
          className="col-md-6"
          style={{ backgroundColor: wallColor, height: "100%" }}
        >
          <div className="row">
            <div className="col-md-12">
              <h4>programTime</h4>
              <p>The time is {programTime}</p>
              <ClockComponent />
            </div>
            <div className="col-md-6">
              Current Task : {displayMessage ? displayMessage : "Not task yet"}
            </div>
            <div className="col-md-6">{programTime}</div>
            <div className="col-md-6 offset-3">
              <button
                className="btn btn-primary"
                onClick={() => fetchReports()}
              >
                Report
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <Logs />
        </div>
      </div>
    </div>
  );
};

export default App;
