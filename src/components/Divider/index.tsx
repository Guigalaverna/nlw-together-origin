import cx from "classnames";
import React from "react";
import "./styles.scss";

interface DividerProps {
  isReverted?: boolean;
}

export function Divider({ isReverted = false }: DividerProps) {
  return <div id="divider" className={cx({ reverted: isReverted })}></div>;
}
