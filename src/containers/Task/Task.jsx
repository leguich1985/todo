import React, { useState, memo, useCallback } from "react";
import { editTodo, startEdit } from "utils/task";
import { Task as Component } from "components/Task";

export const Task = memo(
  ({
    id,
    text,
    completed,
    isEditing,
    createdAt,
    complitingChange,
    onDeleteTodo,
    todos,
    setTodos,
  }) => {
    const [editTodoText, setEditTodoText] = useState(text);

    const onEditTodo = useCallback(
      (event) => {
        event.preventDefault();
        event.target.focus();
        setTodos(editTodo(todos, id, editTodoText));
      },
      [editTodoText, id, setTodos, todos]
    );

    const onStartEdit = useCallback(() => {
      setTodos(startEdit(todos, id));
    }, [id, todos, setTodos]);

    return (
      <Component
        onStartEdit={onStartEdit}
        onEditTodo={onEditTodo}
        editTodoText={editTodoText}
        setEditTodoText={setEditTodoText}
        id={id}
        isEditing={isEditing}
        completed={completed}
        complitingChange={complitingChange}
        text={text}
        createdAt={createdAt}
        onDeleteTodo={onDeleteTodo}
      />
    );
  }
);
