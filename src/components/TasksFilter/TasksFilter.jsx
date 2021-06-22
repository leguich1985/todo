import React, { memo } from "react";
import { Button } from "ui/Button";
import classNames from "classnames";
import { isFilter } from "utils/filterclasses";
import { FILTER_NAMES } from "constants/tasksFilter";

export const TasksFilter = memo(({ currentFilter, onFilterChange }) => (
  <ul className="filters">
    {FILTER_NAMES.map((name) => (
      <li key={name}>
        <Button
          className={classNames({
            selected: isFilter(currentFilter, name),
          })}
          onClick={() => onFilterChange(name)}
        >
          {name}
        </Button>
      </li>
    ))}
  </ul>
));
