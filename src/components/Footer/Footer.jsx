import React, { memo } from "react";
import { Button } from "ui/Button";
import { TasksFilter } from "components/TasksFilter";
import "./index.css";

export const Footer = memo(
  ({
    activeTasksCount,
    clearCompletedHandler,
    filterChangeHandler,
    currentFilter,
  }) => {
    return (
      <footer className="footer">
        <span className="todo-count">{activeTasksCount} items left</span>
        <TasksFilter
          currentFilter={currentFilter}
          filterChangeHandler={filterChangeHandler}
        />
        <Button className="clear-completed" onClick={clearCompletedHandler}>
          Clear completed
        </Button>
      </footer>
    );
  }
);
