import { useState } from "react";
import Button from "./Components/Button";
import ButtonWithoutState from "./Components/ButtonWithoutState";

const products = [
  { name: "trilochan", age: 22, id: 1 },
  { name: "prasad", age: 20, id: 2 },
  { name: "awaken", age: 12, id: 3 },
];
function App() {
  const [lifted, setLifted] = useState(0);

  function handleLifted() {
    setLifted(lifted + 1);
  }

  const listOfItems = products.map((product) => (
    <li
      id={product.id}
      style={{ color: product.age > 20 ? "orange" : "magenta" }}
    >
      {product.name}
    </li>
  ));

  return (
    <>
      <p>welcome</p>
      <ul>{listOfItems}</ul>
      <Button />
      <Button />
      <h4>buttons without state, sending props from lifted/central state</h4>
      <ButtonWithoutState lifted={lifted} handleLifted={handleLifted} />
      <ButtonWithoutState lifted={lifted} handleLifted={handleLifted} />
      {/* Notice how onClick={handleClick} has no parentheses () at the end! Do not call the event handler function: you only need to pass it down.
       React will call your event handler when the user clicks the button. */}
    </>
  );
}

export default App;
