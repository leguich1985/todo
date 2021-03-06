import { buttonFiltersActions } from "actions/filterButtonsActions";
import { generateNewTask } from "./generateNewTask";

export const completedTask = (id, tasks) => {
  const idx = tasks.findIndex((todo) => todo.id === id);
  const newTodos = [].concat(tasks);
  newTodos[idx].completed = !newTodos[idx].completed;
  return newTodos;
};

export const clearCompleted = (tasks) => {
  const newTodos = [].concat(tasks);
  const activeTodos = newTodos.filter((todo) => !todo.completed);
  return activeTodos;
};

export const addTask = (tasks, todoText, todoId) => {
  const newTodo = generateNewTask(todoText, todoId);
  const newTodos = [].concat(newTodo).concat(tasks);
  return newTodos;
};

export const deleteTask = (tasks, id) => {
  return tasks.filter((todo) => todo.id !== id);
};

export const editTask = (tasks, id, newTodoText) => {
  const idx = tasks.findIndex((todo) => todo.id === id);
  const newTodos = [].concat(tasks);
  newTodos[idx] = Object.assign({}, newTodos[idx], {
    text: newTodoText,
    isEditing: false,
  });
  return newTodos;
};

export const startEditTask = (tasks, id) => {
  const newTodos = [].concat(tasks);
  const idx = tasks.findIndex((todo) => todo.id === id);
  newTodos[idx] = Object.assign({}, newTodos[idx], { isEditing: true });
  return newTodos;
};

export const filterTasks = (tasks, currentFilter) => {
  const copy = [].concat(tasks);

  if (buttonFiltersActions[currentFilter]) {
    return copy.filter(buttonFiltersActions[currentFilter]);
  }
  return copy;
};
