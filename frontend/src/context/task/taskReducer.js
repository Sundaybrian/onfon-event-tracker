import { FETCH_TASK, SET_CURRENT, SET_PROGRAM_TIME } from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_PROGRAM_TIME:
      return {
        ...state,
        programTime: action.payload,
      };
    default:
      return state;
  }
};
