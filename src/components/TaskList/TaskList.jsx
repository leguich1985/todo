import React, { memo } from "react";
import "./index.css";
import { Task } from "containers/Task";

export const TaskList = memo(
  ({ tasks, complitingChange, onDeleteTodo, setTodos }) => {
    return (
      <section className="main">
        <ul className="todo-list">
          {tasks.map((todo) => (
            <Task
              {...todo}
              tasks={tasks}
              setTodos={setTodos}
              key={todo.id}
              complitingChange={complitingChange}
              onDeleteTodo={onDeleteTodo}
            />
          ))}
        </ul>
      </section>
    );
  }
);
