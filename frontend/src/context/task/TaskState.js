import React, { useReducer } from "react";
import axios from "axios";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

import {
  FETCH_TASK,
  SET_CURRENT,
  SET_PROGRAM_TIME,
  LOAD_TASKS,
  TASK_ERROR,
  SET_WALL_SEC,
} from "./types";

const TaskState = (props) => {
  const initialState = {
    programTime: null,
    wallColor: "#951c49",
    faceColor: "#fb3",
    hourColor: "#611224",
    currentTask: "",
    displayMessage: null,
    wallClockSeconds: null,
    logs: null,
    error: null,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // fetch task periodically
  const checkForTask = async (data) => {
    try {
      const res = await axios.post("/api/check-for-task", data);

      dispatch({
        type: FETCH_TASK,
        payload: res.data,
      });
    } catch (error) {
      console.log(error, "------------------------");
    }
  };

  // set program time
  const setProgramTime = (time) => {
    dispatch({
      type: SET_PROGRAM_TIME,
      payload: time,
    });
  };

  // load reports
  const loadReports = async () => {
    try {
      const res = await axios.get("/api/fetch-logs");
      dispatch({
        type: LOAD_TASKS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: TASK_ERROR,
        payload: error.response.error,
      });
    }
  };

  // set current task
  const setWallClockSeconds = (seconds) => {
    dispatch({
      type: SET_WALL_SEC,
      payload: seconds,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        programTime: state.programTime,
        wallColor: state.wallColor,
        faceColor: state.faceColor,
        hourColor: state.hourColor,
        currentTask: state.currentTask,
        displayMessage: state.displayMessage,
        wallClockSeconds: state.wallClockSeconds,
        logs: state.logs,
        setProgramTime,
        loadReports,
        checkForTask,
        setWallClockSeconds,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
