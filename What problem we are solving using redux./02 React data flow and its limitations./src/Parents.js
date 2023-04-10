import React, { useState } from "react";
import Child from "./Child";

const Parents = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Parents Components</p>
      <div className="card">
        <div className="container">
          <h1>{count}</h1>
          {/* <button
            className="button"
            style={{ marginRight: "10px" }}
            onClick={() => setCount((prevState) => prevState + 1)}>
            Increment
          </button>
          <button
            className="button button2"
            onClick={() => setCount(count - 1)}>
            decrement
          </button> */}
        </div>
      </div>
      <Child count={count} setCount={setCount}/>
    </div>
  );
};

export default Parents;
