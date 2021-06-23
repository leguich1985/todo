import React, { useState, useCallback, useMemo, memo } from "react";
import { NewTaskForm } from "components/NewTaskForm";
import { TaskList } from "components/TaskList";
import { Footer } from "components/Footer";
import { mockTasks } from "__mocks__/tasks";
import {
  completedTask,
  clearCompleted,
  addTask,
  deleteTask,
  filterTasks,
} from "utils/task";
import { v4 } from "uuid";

export const Todo = memo(() => {
  const [tasks, setTasks] = useState(mockTasks);
  const [currentFilter, setCurrentFilter] = useState("All");

  const activeTasksCount = useMemo(() => {
    return filterTasks(tasks, "Active").length;
  }, [tasks]);

  const completingChangeHandler = useCallback(
    (id) => {
      setTasks(completedTask(id, tasks));
    },
    [tasks]
  );

  const deleteTaskHandler = useCallback(
    (id) => {
      setTasks(deleteTask(tasks, id));
    },
    [tasks]
  );

  const clearCompletedHandler = useCallback(() => {
    setTasks(clearCompleted(tasks));
  }, [tasks]);

  const addTaskHandler = useCallback(
    (taskText) => {
      if (taskText === "") return;
      setTasks(addTask(tasks, taskText, v4()));
    },
    [tasks]
  );

  const filterChangeHandler = useCallback((name) => {
    setCurrentFilter(name);
  }, []);

  const filteredTasks = useMemo(
    () => filterTasks(tasks, currentFilter),
    [tasks, currentFilter]
  );

  return (
    <section className="todoapp">
      <NewTaskForm addTaskHandler={addTaskHandler} />
      <TaskList
        setTasks={setTasks}
        tasks={filteredTasks}
        completingChangeHandler={completingChangeHandler}
        deleteTaskHandler={deleteTaskHandler}
      />
      <Footer
        activeTasksCount={activeTasksCount}
        clearCompletedHandler={clearCompletedHandler}
        filterChangeHandler={filterChangeHandler}
        currentFilter={currentFilter}
      />
    </section>
  );
});
