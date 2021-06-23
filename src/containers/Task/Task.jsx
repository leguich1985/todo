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
    tasks,
    setTodos,
  }) => {
    const [editTodoText, setEditTodoText] = useState(text);

    const onEditTodo = useCallback(
      (event) => {
        event.preventDefault();
        event.target.focus();
        setTodos(editTodo(tasks, id, editTodoText));
      },
      [editTodoText, id, setTodos, tasks]
    );

    const onStartEdit = useCallback(() => {
      setTodos(startEdit(tasks, id));
    }, [id, tasks, setTodos]);

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
