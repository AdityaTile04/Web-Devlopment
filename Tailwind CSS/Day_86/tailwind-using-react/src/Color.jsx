import React from "react";

function Color() {
  return (
    <>
      <div className="flex justify-between">
        <div className="bg-red-500 w-40 h-40 rounded">One</div>
        <div className="bg-green-500 w-40 h-40 rounded-md">Two</div>
        <div className="bg-blue-500 w-40 h-40 rounded-lg">Three</div>
        <div className="bg-teal-500 w-40 h-40 rounded-full">Three</div>
      </div>

      <div className="h-[50px] w-[100%] bg-yellow-500 mt-8 border-2 border-black rounded-3xl">
        This is a div
      </div>
    </>
  );
}

export default Color;
