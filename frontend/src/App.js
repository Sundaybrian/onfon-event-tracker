import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

const App = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient("/");
    socket.on("dateFromApi", (data) => {
      console.log(data);
      let response = data.hour + ":" + data.minute + ":" + data.seconds;
      setResponse(response);
    });
  }, []);
  return <p>The time is {response}</p>;
};

export default App;
