import {add_Projects} from "./ActionType";

export const addProjects = (projects) => {
  return { type: add_Projects, projects };
};
