import React, { useState, useCallback, useMemo, memo } from "react";
import { NewTaskForm } from "components/NewTaskForm";
import { TaskList } from "components/TaskList";
import { Footer } from "components/Footer";
import { mockTodos } from "__mocks__/tasks";
import {
  completedTask,
  clearCompleted,
  addTodo,
  deleteTodo,
  filterTodos,
} from "utils/task";
import { v4 } from "uuid";

export const Todo = memo(() => {
  const [tasks, setTodos] = useState(mockTodos);
  const [currentFilter, setCurrentFilter] = useState("All");

  const activeTasksCount = useMemo(() => {
    return filterTodos(tasks, "Active").length;
  }, [tasks]);

  const complitingChange = useCallback(
    (id) => {
      setTodos(completedTask(id, tasks));
    },
    [tasks]
  );

  const onDeleteTodo = useCallback(
    (id) => {
      setTodos(deleteTodo(tasks, id));
    },
    [tasks]
  );

  const onClearCompleted = useCallback(() => {
    setTodos(clearCompleted(tasks));
  }, [tasks]);

  const onAddTodo = useCallback(
    (textTodo) => {
      setTodos(addTodo(tasks, textTodo, v4()));
    },
    [tasks]
  );

  const onFilterChange = useCallback((name) => {
    setCurrentFilter(name);
  }, []);

  const filteredTodos = useMemo(
    () => filterTodos(tasks, currentFilter),
    [tasks, currentFilter]
  );

  return (
    <section className="todoapp">
      <NewTaskForm onAddTodo={onAddTodo} />
      <TaskList
        setTodos={setTodos}
        tasks={filteredTodos}
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
