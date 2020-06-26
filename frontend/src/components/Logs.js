import React, { useContext } from "react";
import TaskContext from "../context/task/taskContext";
import LogItem from "./LogItem";

const Logs = () => {
  const context = useContext(TaskContext);
  const { logs } = context;

  if (logs == null) {
    return <p>No Logs to show</p>;
  }
  return (
    <>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Program Time</th>
            <th scope="col">Event</th>
            <th scope="col">Message</th>
            <th scope="col">Actual Time</th>
            <th scope="col">Display Message</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(function (task, i) {
            return <LogItem task={task} key={task._id}></LogItem>;
          })}
        </tbody>
      </table>
    </>
  );
};

export default Logs;
