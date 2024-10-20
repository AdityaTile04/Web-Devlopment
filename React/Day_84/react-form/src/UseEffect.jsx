import React, { useEffect, useState } from "react";

function UseEffect() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  function handleCountx() {
    setCountx(countx + 1);
  }
  function handleCounty() {
    setCounty(county + 1);
  }

  useEffect(
    function printSomething() {
      console.log("this is side-effect");
    },
    [countx, county]
  );

  return (
    <div>
      <h3>Count : {countx}</h3>
      <button onClick={handleCountx}>Increase</button>
      <h3>Count : {county}</h3>
      <button onClick={handleCounty}>Increase</button>
    </div>
  );
}

export default UseEffect;
