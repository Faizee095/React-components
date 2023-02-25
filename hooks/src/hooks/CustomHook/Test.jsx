import { useState } from "react";
import useCount from "./useCount";

const Test = () => {
  const [count, setCount] = useState(0);
  useCount(count)
  return (
    <div className="app">
      <div className="section-one">
        <h1>Count - {count}</h1>
        <button className="btn" onClick={() => setCount(count + 1)}>
          update
        </button>
      </div>
    </div>
  );
};

export default Test;
