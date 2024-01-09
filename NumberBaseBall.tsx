import React, { useCallback, useRef, useState } from "react";
import { Try } from "./Try";
import { TryInfo } from "./types";

const getNumbers = () => {
  const candidates = Array.from({ length: 9 }, (v, i) => i + 1);
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

const NumberBaseBall = () => {
  const [answer, setAnswer] = useState(getNumbers());
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [tries, setTries] = useState<TryInfo[]>([]);

  const inputEL = useRef<HTMLInputElement>(null);

  const getResult = () => {
    if (value == answer.join("")) {
      setTries((t) => [...t, { try: value, result: "홈런!" }]);
      setResult("홈런!");
    } else {
      const answerArray = value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;

      if (tries.length >= 9) {
        setResult("실패");
      } else {
        console.log(`답은 ${answer.join("")}`);
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike++;
          } else if (answer.includes(answerArray[i])) {
            ball++;
          }
        }
        setTries((t) => [
          ...t,
          { try: value, result: `${strike} 스트라이크, ${ball} 볼` },
        ]);
      }
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = inputEL.current;
    getResult();
    if (result === "홈런!" || "실패") {
      setAnswer(getNumbers());
      setTries([]);
    }
    setValue("");
    input?.focus();
  };

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input ref={inputEL} onChange={onChange} value={value} />
        <h3> 시도 : </h3>
        <Try tryinfo={tries} />
      </form>
    </>
  );
};

export default NumberBaseBall;
