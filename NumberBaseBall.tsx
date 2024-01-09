import React, { useCallback, useRef, useState } from "react";
import { Try } from "./Try";
import { TryInfo } from "./types";

const NumberBaseBall = () => {
  const [value, setValue] = useState(
    Array.from(length :4, () => Math.ceil(Math.random() * 9))
  );
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [count, setCount] = useState(0);
  const [tries, setTries] = useState<TryInfo[]>([]);

  const inputEL = useRef<HTMLInputElement>(null);

  const onSubmit = () => {
    const array=answer.split('');
     tries.push({ try: count, result: result });
  };

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input ref={inputEL} onChange={onChange} value={answer} />
        <h3> 시도 : </h3>
        <Try tryinfo={tries} />
      </form>
    </>
  );
};

export default NumberBaseBall;
