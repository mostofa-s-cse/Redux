import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "./App";
const Child = () => {
  const { count, setCount } = useContext(COUNTER_CONTEXT);
  return (
    <div>
      <p>Child Components</p>
      <div className="card">
        <div className="container">
          <h1>{count}</h1>
          <button
            className="button"
            style={{ marginRight: "10px" }}
            onClick={() => setCount((prevState) => prevState + 1)}>
            Increment
          </button>
          <button
            className="button button2"
            onClick={() => setCount(count - 1)}>
            decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Child;
