import React, { memo } from "react";
import { Button } from "ui/Button";
import classNames from "classnames";
import { isFilter } from "utils/filterclasses";
import { FILTER_NAMES } from "constants/tasksFilter";

export const TasksFilter = memo(({ currentFilter, filterChangeHandler }) => (
  <ul className="filters">
    {FILTER_NAMES.map((name) => (
      <li key={name}>
        <Button
          className={classNames({
            selected: isFilter(currentFilter, name),
          })}
          onClick={() => filterChangeHandler(name)}
        >
          {name}
        </Button>
      </li>
    ))}
  </ul>
));
