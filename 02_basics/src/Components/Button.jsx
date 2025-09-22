import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <p>this is button component</p>
      <button onClick={handleClick}>Clicked me: {count}</button>
    </>
  );
}
