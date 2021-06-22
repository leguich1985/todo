import { buttonFiltersActions } from "actions/filterButtonsActions";
import { generateNewTask } from "./generateNewTask";

export const completedTask = (id, todos) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  const newTodos = [].concat(todos);
  newTodos[idx].completed = !newTodos[idx].completed;
  return newTodos;
};

export const clearCompleted = (todos) => {
  const newTodos = [].concat(todos);
  const activeTodos = newTodos.filter((todo) => !todo.completed);
  return activeTodos;
};

export const addTodo = (todos, todoText, todoId) => {
  const newTodo = generateNewTask(todoText, todoId);
  const newTodos = [].concat(newTodo).concat(todos);
  return newTodos;
};

export const deleteTodo = (todos, id) => {
  return todos.filter((todo) => todo.id !== id);
};

export const editTodo = (todos, id, newTodoText) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  const newTodos = [].concat(todos);
  newTodos[idx] = Object.assign({}, newTodos[idx], {
    text: newTodoText,
    isEditing: false,
  });
  return newTodos;
};

export const startEdit = (todos, id) => {
  const newTodos = [].concat(todos);
  const idx = todos.findIndex((todo) => todo.id === id);
  newTodos[idx] = Object.assign({}, newTodos[idx], { isEditing: true });
  return newTodos;
};

export const filterTodos = (todos, currentFilter) => {
  const copy = [].concat(todos);

  if (buttonFiltersActions[currentFilter]) {
    return copy.filter(buttonFiltersActions[currentFilter]);
  }
  return copy;
};
