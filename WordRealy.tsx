import * as React from "react";
import { useState, useCallback, useRef } from "react";

const GuGuDan = () => {
  const [word, setWord] = useState("시작");
  const [result, setResult] = useState("");
  const [answer, setAnswer] = useState("");

  const inputEL = useRef<HTMLInputElement>(null);

  // 1. 제네릭 자리에 type을 선언해주기!

  const onSubmit = useCallback<(e: React.FormEvent) => void>(
    (e) => {
      e.preventDefault();
      const input = inputEL.current;

      if (word[word.length - 1] === answer[0]) {
        setResult("딩동댕");
        setWord(answer);
      } else {
        setResult("땡");
      }
      input?.focus();
      setAnswer("");
    },
    [word, answer]
  );

  // 2. 매개변수에 직접 타입 선언
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>{word}?</h1>
        <input
          ref={inputEL}
          type="string"
          name="answer"
          value={answer}
          onChange={onChange}
        />
        <button> 입력</button>
      </form>
      <h2> {result}</h2>
    </>
  );
};

export default GuGuDan;
