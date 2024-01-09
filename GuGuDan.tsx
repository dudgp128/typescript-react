import * as React from "react";
import { useState, useEffect } from "react";

const GuGuDan = () => {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [result, setResult] = useState();

  const getRandomNum = () => {
    return Math.random() * 9;
  };

  useEffect(() => {
    setValue1(getRandomNum);
    setValue2(getRandomNum);
  }, []);

  const onSubmit = (e: HTMLFormElement) => {
    if (e.target.name === "answer") {
      const;
    }

    if (value1 * value2 === answer) {
      setResult("딩동댕");
    } else {
      setResult("땡");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>
          ${value1} x ${value2}?
        </h1>
        <input name="answer" />
        <button> 입력</button>
      </form>
      <h2> ${result}</h2>
    </>
  );
};

export default GuGuDan;
