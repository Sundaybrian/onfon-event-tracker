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
  return <p>The time is {programTime}</p>;
};

export default App;
