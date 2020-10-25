//actions.js
import { TASK_DATA } from "./actionTypes";
export function setTaskData(data) {
  return {
    type: TASK_DATA,
    data
  }
}
