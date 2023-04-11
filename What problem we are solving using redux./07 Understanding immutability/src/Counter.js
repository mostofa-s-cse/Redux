import React, { useReducer, useState } from "react";

const Counter = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    console.log(action)
    if (action.type === "Increment") {
      return state + action.payload;
    } else if (action.type === "decrement") {
      return state - action.payload;
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
            onClick={() => dispatch({ type: "Increment" ,payload:5})}>
            Increment
          </button>
          <button
            className="button button2"
            onClick={() => dispatch({ type: "decrement",payload:5 })}>
            decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
