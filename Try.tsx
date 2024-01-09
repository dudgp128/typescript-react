import React from "react";
import { TryInfo } from "./types";

export const Try: React.FunctionComponent({tryInfo:TryInfo}) = () => {
  return <ul>
    {tryInfo.map((e)=> <li> {e.try}, {e.result}</li>)}
  </ul>
};
