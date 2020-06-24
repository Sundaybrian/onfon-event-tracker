import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";

const App = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient("/");
    socket.on("dateFromApi", (data) => {
      setResponse(data);
    });
  }, []);
  return (
    <p>
      The time is <time dateTime={response}>{response}</time>
    </p>
  );
};

export default App;
