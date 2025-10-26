import "./App.css";
import GrandChild from "./Components/GrandChild";
import Dad from "./Components/Dad";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("dark");
  let theme;
  function handleTheme() {
    if (color === "dark") {
      theme = "white";
      console.log(theme);
      setColor(theme);
    } else {
      theme = "dark";
      setColor(theme);
    }
  }

  const bg = color === "dark" ? "#111" : "#ffffff";

  return (
    <div style={{ backgroundColor: bg }}>
      <h1>
        Play around with basics of react, props, passing props, reusability
      </h1>
      <Dad />
      <GrandChild onClick={handleTheme}>set Theme</GrandChild>
    </div>
  );
}

export default App;
// this is testing push pull hey there , github local desktop setup
