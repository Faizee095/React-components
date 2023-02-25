import React, { useReducer } from "react";

const reducer = (curState, action) => {
  if (action.type === "INCREMENT") return curState + 1;
  if (action.type === "DECREMENT") return curState - 1;
};
const intialState = 0;
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div className="app">
      <div className="section-one">
        <h1>Count -- {state} </h1>
        <button className="btn" onClick={() => dispatch({ type: "INCREMENT" })}>
          +
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "DECREMENT" })}
          style={{ marginLeft: "20px" }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
