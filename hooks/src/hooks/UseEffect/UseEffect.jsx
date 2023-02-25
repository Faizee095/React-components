import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count ${count}`
  })
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

export default UseEffect;
