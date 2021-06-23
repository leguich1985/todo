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
    setTasks,
  }) => {
    const [editTodoText, setEditTodoText] = useState(text);

    const onEditTodo = useCallback(
      (event) => {
        event.preventDefault();
        event.target.focus();
        setTasks(editTodo(tasks, id, editTodoText));
      },
      [editTodoText, id, setTasks, tasks]
    );

    const onStartEdit = useCallback(() => {
      setTasks(startEdit(tasks, id));
    }, [id, tasks, setTasks]);

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
