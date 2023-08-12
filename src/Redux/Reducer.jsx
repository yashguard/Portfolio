import { add_Projects } from "./ActionType";

let initialState = { projects: [] };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case add_Projects:
      return { ...state, projects: [...action.projects] };

    default:
      return state;
  }
};
