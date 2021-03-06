import React, { memo } from "react";
import "./index.css";
import { Task } from "containers/Task";

export const TaskList = memo(
  ({ tasks, completingChangeHandler, deleteTaskHandler, setTasks }) => {
    return (
      <section className="main">
        <ul className="todo-list">
          {tasks.map((todo) => (
            <Task
              {...todo}
              tasks={tasks}
              setTasks={setTasks}
              key={todo.id}
              completingChangeHandler={completingChangeHandler}
              deleteTaskHandler={deleteTaskHandler}
            />
          ))}
        </ul>
      </section>
    );
  }
);
