import { useState } from "react";
export default function Square({ value }) {
  //   const [value, setValue] = useState(null);

  //   function handleValue() {
  //     value === null ? setValue("x") : setValue(null);
  //     console.log("clicked");
  //   }

  return (
    <button className="square" onClick={handleValue}>
      {value}
    </button>
  );
}
