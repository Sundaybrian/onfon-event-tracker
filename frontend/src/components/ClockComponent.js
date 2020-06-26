import React, { useEffect, useState, useContext } from "react";
import TaskContext from "../context/task/taskContext";

import Clock from "react-clock";

function ClockComponent({}) {
  const context = useContext(TaskContext);
  const { wallClockSeconds } = context;

  const [date, setDate] = useState(null);
  useEffect(() => {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(wallClockSeconds);
    setDate(t);
  }, [wallClockSeconds]);
  return <Clock value={date} />;
}

export default ClockComponent;
