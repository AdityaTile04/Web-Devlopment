import React from "react";
import "./App.css";
import TicketNum from "./ticketNum";

export default function Ticket({ ticket }) {
  return (
    <div className="Ticket">
      <h4>Ticket</h4>
      {ticket.map((num, i) => (
        <TicketNum num={num} key={i} />
      ))}
    </div>
  );
}
