import React from "react";

function handleClick() {
  console.log("button was clicked");
}

function handleParagraph() {
  console.log("this a paragraph");
}

function handledblClick() {
  console.log("double clicked");
}

function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p onMouseEnter={handleParagraph}>This is a paragraph</p>
      <button onDoubleClick={handledblClick}>Double Click</button>
    </div>
  );
}

export default Button;
