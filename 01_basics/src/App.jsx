import { useState } from "react";
import Button from "./components/Button";
import UserCompo from "./components/UserCompo";
function App() {
  const [present, setPresent] = useState(false);

  return (
    <div className="fresher">
      <p>Welcome to my app</p>
      <Button />
      <p>
        hello there <br /> how do you do{" "}
      </p>
      {!present && <UserCompo />}
      {/* conditional rendering as shown / seen here */}
      {present ? <UserCompo /> : <Button />}
    </div>
  );
}

export default App;

// jsx is stricter than html. you have to close tags like <br />
// functions can return one jsx not multiple , hence wrapped in <></> or div etc.
