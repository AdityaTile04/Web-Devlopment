import React, { useState } from "react";

function LudoBorad() {
  let [moves, setMoves] = useState({ blue: 0, green: 0, yellow: 0, red: 0 });
  let [arr, setArr] = useState(["no moves"]);

  const handleBlue = () => {
    setMoves((preVal) => {
      return { ...preVal, blue: preVal.blue + 1 };
    });
    setArr((pa) => {
      return [...pa, "blue moves"];
    });
    console.log(arr);
  };

  const handleGreen = () => {
    setMoves((preVal) => {
      return { ...preVal, green: preVal.green + 1 };
    });
  };

  const handleYellow = () => {
    setMoves((preVal) => {
      return { ...preVal, yellow: preVal.yellow + 1 };
    });
  };

  const handleRed = () => {
    setMoves((preVal) => {
      return { ...preVal, red: preVal.red + 1 };
    });

    setArr((pa) => {
      return [...pa, "red moves"];
    });
    console.log(arr);
  };

  return (
    <div>
      <p>Game Begins!</p>
      <div className="board">
        <p>Blue moves = {moves.blue} </p>

        <button onClick={handleBlue} style={{ backgroundColor: "blue" }}>
          +1
        </button>
        <p>Green moves = {moves.green} </p>
        <button onClick={handleGreen} style={{ backgroundColor: "green" }}>
          +1
        </button>
        <p>Yellow moves = {moves.yellow} </p>
        <button
          onClick={handleYellow}
          style={{ backgroundColor: "yellow", color: "black" }}
        >
          +1
        </button>
        <p>Red moves = {moves.red} </p>
        <button onClick={handleRed} style={{ backgroundColor: "red" }}>
          +1
        </button>
      </div>
    </div>
  );
}

export default LudoBorad;
