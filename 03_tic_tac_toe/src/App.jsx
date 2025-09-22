import { useState } from "react";
import Square from "./Components/Square";

function App() {
  const [values, setValues] = useState(Array(9).fill(null));

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="mainContainer">
        <div className="boardRow">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="boardRow">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="boardRow">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );
}

export default App;
