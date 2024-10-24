import React from "react";

function Demo() {
  return (
    <div>
      {/* Typography */}
      {/* font-family */}
      <p className="font-sans">This is a paragraph</p>
      <p className="font-serif">This is a paragraph</p>
      <p className="font-mono">This is a paragraph</p>
      <hr /> <hr />
      {/* font-size */}
      <p className="text-xs">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, voluptas.
      </p>
      <p className="text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, voluptas.
      </p>
      <p className="text-base">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, voluptas.
      </p>
      <p className="text-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, voluptas.
      </p>
      <p className="text-xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, voluptas.
      </p>
      <p className="text-2xl italic tracking-tight text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        quasi.
      </p>
      <hr /> <hr />
      <hr />
      {/* Sizing */}
      <div className="bg-red-500 w-[200px] h-[200px]">This is a div</div>
    </div>
  );
}

export default Demo;
