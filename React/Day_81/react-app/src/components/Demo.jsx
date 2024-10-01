import React from "react";

function handleEvent(event) {
  console.log(event);
}

function Demo() {
  return (
    <div>
      <button onClick={handleEvent}>Submit</button>
    </div>
  );
}

export default Demo;
