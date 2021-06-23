import React, { useState, memo } from "react";
import "./index.css";

export const NewTaskForm = memo(({ onAddTodo }) => {
  const [todoText, setTodoText] = useState("");

  const updateTodoText = ({ target: { value } }) => {
    setTodoText(value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    onAddTodo(todoText);
    setTodoText("");
  };

  return (
    <header>
      <h1>tasks</h1>
      <form onSubmit={addTodo}>
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
