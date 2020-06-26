import React, { useEffect, useState, useContext } from "react";
import socketIOClient from "socket.io-client";

import TaskContext from "./context/task/taskContext";
import Logs from "./components/Logs";

const App = () => {
  const context = useContext(TaskContext);
  const {
    setProgramTime,
    programTime,
    wallColor,
    faceColor,
    hourColor,
    loadReports,
  } = context;

  useEffect(() => {
    const socket = socketIOClient("/");
    socket.on("dateFromApi", (data) => {
      console.log(data);
      let response = data.hour + ":" + data.minute + ":" + data.seconds;
      setProgramTime(response);
    });
  }, []);

  const fetchReports = () => {
    // fetch all logs
    loadReports();
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 wall-color">
          <div className="row">
            <div className="col-md-12">
              <h4>programTime</h4>
              <p>The time is {programTime}</p>
            </div>
            <div className="col-md-6">Current Task</div>
            <div className="col-md-6">Current Time</div>
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
