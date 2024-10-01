import React from "react";
import { useState } from "react";

function Counter() {
  function init() {
    return Math.random();
  }

  let [count, setCount] = useState(init);

  function incCounter() {
    setCount((currCount) => {
      return (currCount += 1);
    });
  }

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCounter}>Submit</button>
    </div>
  );
}

export default Counter;
