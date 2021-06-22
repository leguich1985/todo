import { NEW_TASK_FIELDS } from "constants/newTaskFields";

export const generateNewTask = (taskText, taskId) =>
  Object.assign({}, NEW_TASK_FIELDS, {
    id: taskId,
    text: taskText,
    createdAt: new Date(Date.now()),
  });
