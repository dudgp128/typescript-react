import React from "react";
import { TryProps } from "./types";

export const Try: React.FunctionComponent<TryProps> = ({ tryInfo }) => {
  return (
    <li>
      {tryInfo.try}, {tryInfo.result}
    </li>
  );
};
