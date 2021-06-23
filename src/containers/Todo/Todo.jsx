import React, { useState, useCallback, useMemo, memo } from "react";
import { NewTaskForm } from "components/NewTaskForm";
import { TaskList } from "components/TaskList";
import { Footer } from "components/Footer";
import { mockTasks } from "__mocks__/tasks";
import {
  completedTask,
  clearCompleted,
  addTodo,
  deleteTask,
  filterTodos,
} from "utils/task";
import { v4 } from "uuid";

export const Todo = memo(() => {
  const [tasks, setTasks] = useState(mockTasks);
  const [currentFilter, setCurrentFilter] = useState("All");

  const activeTasksCount = useMemo(() => {
    return filterTodos(tasks, "Active").length;
  }, [tasks]);

  const complitingChange = useCallback(
    (id) => {
      setTasks(completedTask(id, tasks));
    },
    [tasks]
  );

  const onDeleteTodo = useCallback(
    (id) => {
      setTasks(deleteTask(tasks, id));
    },
    [tasks]
  );

  const onClearCompleted = useCallback(() => {
    setTasks(clearCompleted(tasks));
  }, [tasks]);

  const onAddTodo = useCallback(
    (textTodo) => {
      setTasks(addTodo(tasks, textTodo, v4()));
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
        setTasks={setTasks}
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
