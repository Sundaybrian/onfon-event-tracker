import {
  FETCH_TASK,
  SET_CURRENT,
  SET_PROGRAM_TIME,
  LOAD_TASKS,
  TASK_ERROR,
  SET_WALL_SEC,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_PROGRAM_TIME:
      return {
        ...state,
        programTime: action.payload,
      };
    case LOAD_TASKS:
      return {
        ...state,
        logs: [...action.payload],
      };
    case FETCH_TASK:
      return {
        ...state,
        wallColor: action.payload.wall_color,
        faceColor: action.payload.face_color,
        hourColor: action.payload.hour_color,
        displayMessage: action.payload.result[0].displayMessage,
        currentTask: action.payload.result[0].message,
      };
    case SET_WALL_SEC:
      return {
        ...state,
        wallClockSeconds: action.payload,
      };

    default:
      return state;
  }
};
