import React, { useState } from "react";
import { generate, sum } from "./helper";

export default function Lottery() {
  let [ticket, setTicket] = useState(generate(3));

  let isWinning = sum(ticket) === 15;

  let buyTicket = () => {
    setTicket(generate(3));
  };

  return (
    <div>
      <h1>Lottery Game</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
        <h3>{isWinning && "Congratulations, you won!"}</h3>
        <button onClick={buyTicket}>Buy New Ticket</button>
      </div>
    </div>
  );
}
