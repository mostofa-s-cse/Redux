import React, { useReducer, useState } from "react";

const Counter = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    console.log(action)
    if (action.type === "Increment") {
      return state + 1;
    } else if (action.type === "decrement") {
      return state - 1;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div className="counter">
        <div className="container">
          <h1>{state}</h1>
          <button
            className="button"
            style={{ marginRight: "10px" }}
            onClick={() => dispatch({ type: "Increment" })}>
            Increment
          </button>
          <button
            className="button button2"
            onClick={() => dispatch({ type: "decrement" })}>
            decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
