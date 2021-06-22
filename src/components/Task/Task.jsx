import React, { memo } from "react";
import "./index.css";
import { formatDistanceToNow } from "date-fns";
import classNames from "classnames";

export const Task = memo(
  ({
    onStartEdit,
    onEditTodo,
    editTodoText,
    setEditTodoText,
    isEditing,
    completed,
    complitingChange,
    id,
    text,
    createdAt,
    onDeleteTodo,
  }) => {
    return (
      <li className={classNames({ editing: isEditing, completed: completed })}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={() => complitingChange(id)}
          />
          <label>
            {!isEditing && <span className="description">{text}</span>}
            <span className="created">
              created {formatDistanceToNow(createdAt, { includeSeconds: true })}{" "}
              ago
            </span>
          </label>
          <button className="icon icon-edit" onClick={onStartEdit}></button>
          <button
            className="icon icon-destroy"
            onClick={() => onDeleteTodo(id)}
          ></button>
        </div>
        {isEditing && (
          <form onSubmit={onEditTodo}>
            <input
              type="text"
              className="edit"
              value={editTodoText}
              onChange={({ target: { value } }) => setEditTodoText(value)}
              onBlur={onEditTodo}
              autoFocus
            />
          </form>
        )}
      </li>
    );
  }
);
