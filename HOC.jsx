import "./styles.css";
import { useState, useRef } from "react";

function App() {
  return (
    <div className="App">
      <h1>Learning HOC</h1>
      <HOCgreen comp={Counter} />
      <HOCred comp={Counter} />
    </div>
  );
}

function HOCgreen(props) {
  return (
    <h2
      style={{
        color: "green",
        backgroundColor: "yellow",
        margin: "auto",
        width: "400px"
      }}
    >
      {/* here props.comp is passed down from App component. */}
      <props.comp />
    </h2>
  );
}
function HOCred(props) {
  return (
    <h2
      style={{
        color: "red",
        backgroundColor: "yellow",
        margin: "auto",
        width: "400px"
      }}
    >
      {/* here props.comp is passed down from App component. */}
      <props.comp />
    </h2>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update number</button>
    </div>
  );
}

export default App;

