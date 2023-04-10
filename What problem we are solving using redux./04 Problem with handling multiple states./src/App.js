import { useReducer } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const initialState = 0;
  const reducer = () => {};
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
        <h2>04 Problem with handling multiple states.</h2>
        <Counter />
      </header>
    </div>
  );
}

export default App;
