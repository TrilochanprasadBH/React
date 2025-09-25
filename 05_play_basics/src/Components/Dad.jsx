import GrandChild from "./GrandChild";
import { useState } from "react";
export default function Dad() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  function handleCount() {
    setCount((prev) => prev + 1);
  }
  function handleScore() {
    setScore((prev) => prev + 1);
  }

  return (
    <>
      <h1>Hello this is trilochan prasad, dad</h1>
      <GrandChild onClick={handleCount}>
        grand child is Abhimanyoo: {count}
      </GrandChild>
      <GrandChild onClick={handleScore}>
        grand child is yasovarman: {score}
      </GrandChild>
    </>
  );
}
