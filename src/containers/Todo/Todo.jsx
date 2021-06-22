import React, { useState, useCallback, useMemo, memo } from "react";
import { NewTaskForm } from "components/NewTaskForm";
import { TaskList } from "components/TaskList";
import { Footer } from "components/Footer";
import { mockTodos } from "__mocks__/todos";
import {
  completedTask,
  clearCompleted,
  addTodo,
  deleteTodo,
  filterTodos,
} from "utils/task";
import { v4 } from "uuid";

export const Todo = memo(() => {
  const [todos, setTodos] = useState(mockTodos);
  const [currentFilter, setCurrentFilter] = useState("All");

  const activeTasksCount = useMemo(() => {
    return filterTodos(todos, "Active").length;
  }, [todos]);

  const complitingChange = useCallback(
    (id) => {
      setTodos(completedTask(id, todos));
    },
    [todos]
  );

  const onDeleteTodo = useCallback(
    (id) => {
      setTodos(deleteTodo(todos, id));
    },
    [todos]
  );

  const onClearCompleted = useCallback(() => {
    setTodos(clearCompleted(todos));
  }, [todos]);

  const onAddTodo = useCallback(
    (textTodo) => {
      setTodos(addTodo(todos, textTodo, v4()));
    },
    [todos]
  );

  const onFilterChange = useCallback((name) => {
    setCurrentFilter(name);
  }, []);

  const filteredTodos = useMemo(
    () => filterTodos(todos, currentFilter),
    [todos, currentFilter]
  );

  return (
    <section className="todoapp">
      <NewTaskForm onAddTodo={onAddTodo} />
      <TaskList
        setTodos={setTodos}
        todos={filteredTodos}
        complitingChange={complitingChange}
        onDeleteTodo={onDeleteTodo}
      />
      <Footer
        activeTasksCount={activeTasksCount}
        onClearCompleted={onClearCompleted}
        onFilterChange={onFilterChange}
        currentFilter={currentFilter}
      />
    </section>
  );
});
