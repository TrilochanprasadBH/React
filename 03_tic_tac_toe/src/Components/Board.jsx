import Square from "./Square";
export default function Board({ values, xIsNext, onPlay }) {
  // immutability step: const nextSquares = values.slice();
  //slice() creates a shallow copy of the current board array
  //Why copy? State in React should be treated as immutable. Reassigning squares[0] = "X"--EXTREMELY IMPORTANT
  // directly mutates state, which can cause stale UI, memo/cache bugs, missed re-renders -EXTREMELY IMPORTANT
  //Copy → modify → setState is the correct pattern.
  const winner = calculateWinner(values);
  let status;
  if (winner) {
    status = "winner is: " + winner;
  } else {
    status = "next player: " + (xIsNext ? "X" : "O");
  }

  function handleClickSquare(i) {
    //to avoid x/0 alternating when we click on same box
    if (values[i] || calculateWinner(values)) {
      return;
    }
    const nextValues = values.slice();
    //Spread: const nextSquares = [...squares] ,alterntive to using slice
    if (xIsNext) {
      nextValues[i] = "X";
    } else {
      nextValues[i] = "O";
    }
    onPlay(nextValues);
    // setValues(nextValues);
    // setXIsNext(!xIsNext);
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <h3>{status}</h3>
      <div className="mainContainer">
        <div className="boardRow">
          <Square
            value={values[0]}
            handleClickSquare={() => handleClickSquare(0)}
          />
          <Square
            value={values[1]}
            handleClickSquare={() => handleClickSquare(1)}
          />
          <Square
            value={values[2]}
            handleClickSquare={() => handleClickSquare(2)}
          />
        </div>
        <div className="boardRow">
          <Square
            value={values[3]}
            handleClickSquare={() => handleClickSquare(3)}
          />
          <Square
            value={values[4]}
            handleClickSquare={() => handleClickSquare(4)}
          />
          <Square
            value={values[5]}
            handleClickSquare={() => handleClickSquare(5)}
          />
        </div>
        <div className="boardRow">
          <Square
            value={values[6]}
            handleClickSquare={() => handleClickSquare(6)}
          />
          <Square
            value={values[7]}
            handleClickSquare={() => handleClickSquare(7)}
          />
          <Square
            value={values[8]}
            handleClickSquare={() => handleClickSquare(8)}
          />
        </div>
      </div>
    </>
  );
}

function calculateWinner(values) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (values[a] && values[a] === values[b] && values[a] === values[c]) {
      return values[a];
    }
  }
  return null;
}
