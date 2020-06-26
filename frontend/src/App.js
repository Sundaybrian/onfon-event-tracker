import React, { useEffect, useState, useContext } from "react";
import socketIOClient from "socket.io-client";

import TaskContext from "./context/task/taskContext";

const App = () => {
  const context = useContext(TaskContext);
  const { setProgramTime, programTime } = context;

  useEffect(() => {
    const socket = socketIOClient("/");
    socket.on("dateFromApi", (data) => {
      console.log(data);
      let response = data.hour + ":" + data.minute + ":" + data.seconds;
      setProgramTime(response);
    });
  }, []);

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
              <button className="btn btn-primary">Report</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Logs</h4>
        </div>
      </div>
    </div>
  );
};

export default App;
