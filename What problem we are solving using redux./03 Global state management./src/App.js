import { createContext, useState } from "react";
import "./App.css";
import Parents from "./Parents";
export const COUNTER_CONTEXT = createContext();
function App() {
  const [count, setCount] = useState(0);
  const value = { count, setCount };
  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div className="App">
        <header className="App-header">
          <h2>03 Global state management.</h2>
          <Parents />
        </header>
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
