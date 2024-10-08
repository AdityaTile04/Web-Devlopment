import React, { useState } from "react";
import { generate, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n, winCondition }) {
  let [ticket, setTicket] = useState(generate(n));

  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(generate(n));
  };

  return (
    <div>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h3>{isWinning && "Congratulations, you won!"}</h3>
    </div>
  );
}
