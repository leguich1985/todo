import React, { memo } from "react";
import "./index.css";

export const Button = memo(({ children, ...props }) => {
  return <button {...props}>{children}</button>;
});
