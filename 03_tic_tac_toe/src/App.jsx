import { useState } from "react";
import Board from "./Components/Board";

function App() {
  // const [values, setValues] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([Array(9).fill(null)]);
  //putting [] around array in history state as, game history is array of board -{which is an array in itself}.
  //ie game board is Array(9).fill(null) , but history of this will be , [board1, board2, board3]
  // const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  // const currentValues = history[history.length - 1];
  const currentValues = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextValues) {
    // setHistory([...history, nextValues]);
    const nextHistory = [...history.slice(0, currentMove + 1), nextValues];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    // setXIsNext(!xIsNext);
  }

  function jumpTo(move) {
    setCurrentMove(move);
    // setXIsNext(move % 2 === 0);
  }

  const moves = history.map((values, move) => {
    console.log("v:->", values);
    console.log("m:->", move);

    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <p>Main component</p>
      <Board values={currentValues} xIsNext={xIsNext} onPlay={handlePlay} />
      <h3>show history of moves</h3>
      <ol>{moves}</ol>
    </>
  );
}

export default App;
