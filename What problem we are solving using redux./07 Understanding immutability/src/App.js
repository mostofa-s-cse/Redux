import { useReducer } from "react";
import "./App.css";
import Counter from "./Counter";
import Forms from "./Forms";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>07 Understanding immutability.</h2>
        {/* <Counter /> */}
        <Forms/>
      </header>
    </div>
  );
}

export default App;
