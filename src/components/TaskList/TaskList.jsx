import React, { memo } from "react";
import "./index.css";
import { Task } from "containers/Task";

export const TaskList = memo(
  ({ todos, complitingChange, onDeleteTodo, setTodos }) => {
    return (
      <section className="main">
        <ul className="todo-list">
          {todos.map((todo) => (
            <Task
              {...todo}
              todos={todos}
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
