import * as React from "react";
import { useState, useEffect, useRef } from "react";

const GuGuDan = () => {
  const [value1, setValue1] = useState(Math.ceil(Math.random() * 9));
  const [value2, setValue2] = useState(Math.ceil(Math.random() * 9));
  const [result, setResult] = useState("");
  const [answer, setAnswer] = useState("");

  const inputEL = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputEL.current;

    if (value1 * value2 === parseInt(answer)) {
      setResult("딩동댕");
      setValue1(Math.ceil(Math.random() * 9));
      setValue2(Math.ceil(Math.random() * 9));
    } else {
      setResult("땡");
    }
    setAnswer("");
    if (input) {
      input.focus();
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>
          {value1} x {value2}?
        </h1>
        <input
          ref={inputEL}
          type="number"
          name="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button> 입력</button>
      </form>
      <h2> {result}</h2>
    </>
  );
};

export default GuGuDan;
