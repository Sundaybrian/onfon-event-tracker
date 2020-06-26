import React from "react";

function LogItem({ task }) {
  return (
    <tr>
      <th scope="row">{task.programTime}</th>
      <td>{task.event}</td>
      <td>{task.message}</td>
      <td>{task.actualTime}</td>
      <td>{task.displayMessage}</td>
    </tr>
  );
}

export default LogItem;
