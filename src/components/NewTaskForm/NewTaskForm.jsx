import React, { useState, memo } from "react";
import "./index.css";

export const NewTaskForm = memo(({ addTaskHandler }) => {
  const [todoText, setTodoText] = useState("");

  const updateTodoText = ({ target: { value } }) => {
    setTodoText(value);
  };

  const addTask = (event) => {
    event.preventDefault();
    addTaskHandler(todoText);
    setTodoText("");
  };

  return (
    <header>
      <h1>tasks</h1>
      <form onSubmit={addTask}>
        <input
          value={todoText}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={updateTodoText}
        />
      </form>
    </header>
  );
});
