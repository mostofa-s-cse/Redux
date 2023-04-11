import { useReducer } from "react";
import "./App.css";
import Counter from "./Counter";
import Forms from "./Forms";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>05 Action payloads and Dispatch.</h2>
        <h2>06 useState on steroids.(useReducer)</h2>
        {/* <Counter /> */}
        <Forms/>
      </header>
    </div>
  );
}

export default App;
