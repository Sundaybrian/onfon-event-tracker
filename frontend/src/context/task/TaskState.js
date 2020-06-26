import React, { useReducer } from "react";
import axios from "axios";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

import { FETCH_TASK, SET_CURRENT, SET_PROGRAM_TIME } from "./types";

const TaskState = (props) => {
  const initialState = {
    programTime: null,
    wallColor: "",
    faceColor: "",
    hourColor: "",
    currentTask: "",
    displayMessage: "",
    logs: null,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // set program time
  const setProgramTime = (time) => {
    dispatch({
      type: SET_PROGRAM_TIME,
      payload: time,
    });
  };

  // set current task
  //   const setCurrent = (task) => {
  //     dispatch({
  //       type: SET_CURRENT,
  //       payload: task,
  //     });
  //   };

  return (
    <TaskContext.Provider
      value={{
        programTime: state.programTime,
        wallColor: state.wallColor,
        faceColor: state.faceColor,
        hourColor: state.hourColor,
        currentTask: state.currentTask,
        displayMessage: state.displayMessage,
        logs: state.logs,
        setProgramTime,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
