import { useState } from "react";
import Board from "./Components/Board";

function App() {
  // const [values, setValues] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([Array(9).fill(null)]);
  //putting [] around array in history state as, game history is array of board -{which is an array in itself}.
  //ie game board is Array(9).fill(null) , but history of this will be , [board1, board2, board3]
  const [xIsNext, setXIsNext] = useState(true);
  const currentValues = history[history.length - 1];

  function handlePlay(nextValues) {
    setHistory([...history, nextValues]);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <p>Main component</p>
      <Board values={currentValues} xIsNext={xIsNext} onPlay={handlePlay} />
    </>
  );
}

export default App;
