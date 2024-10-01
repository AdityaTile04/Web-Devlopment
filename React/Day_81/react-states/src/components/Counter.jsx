import React from "react";
import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function incCounter() {
    setCount((count += 1));
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCounter}>Submit</button>
    </div>
  );
}

export default Counter;
