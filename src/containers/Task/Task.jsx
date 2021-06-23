import React, { useState, memo, useCallback } from "react";
import { editTask, startEditTask } from "utils/task";
import { Task as Component } from "components/Task";

export const Task = memo(
  ({
    id,
    text,
    completed,
    isEditing,
    createdAt,
    completingChangeHandler,
    deleteTaskHandler,
    tasks,
    setTasks,
  }) => {
    const [editTodoText, setEditTodoText] = useState(text);

    const onEditTodo = useCallback(
      (event) => {
        event.preventDefault();
        event.target.focus();
        setTasks(editTask(tasks, id, editTodoText));
      },
      [editTodoText, id, setTasks, tasks]
    );

    const onStartEdit = useCallback(() => {
      setTasks(startEditTask(tasks, id));
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
        completingChangeHandler={completingChangeHandler}
        text={text}
        createdAt={createdAt}
        deleteTaskHandler={deleteTaskHandler}
      />
    );
  }
);
