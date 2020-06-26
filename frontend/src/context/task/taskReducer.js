import {
  FETCH_TASK,
  SET_CURRENT,
  SET_PROGRAM_TIME,
  LOAD_TASKS,
  TASK_ERROR,
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

    default:
      return state;
  }
};
