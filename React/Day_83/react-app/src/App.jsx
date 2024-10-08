import React from "react";
import Lottery from "./Lottery";
import { sum } from "./helper";

export default function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };

  return (
    <div>
      <Lottery n={3} winCondition={winCondition} />
    </div>
  );
}
