import React from "react";

function Card() {
  return (
    <div className="h-[350px] border-2 border-black rounded-lg">
      <div className="h-[100px] bg-gradient-to-r from-cyan-500 to-blue-500 font-bold text-white flex justify-center items-center text-2xl rounded-md">
        News you can Trust.
      </div>
      <div className="">
        <p className="font-bold text-lg pt-6">
          Stay up to date with the latest!
        </p>
        <p>
          Subscribe to our newsletter for the latest news straight into your
          inbox
        </p>
        <form>
          <input
            type="text"
            placeholder="you@example.com"
            className="w-[300px] mt-4 py-2 border border-gray-700 text-center rounded-md"
          />
          <button
            type="button"
            className="border-none bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 font-bold text-white h-10 w-[250px] rounded-full flex justify-center items-center mt-4 pt-2 ml-[210px]"
          >
            {" "}
            Subscribe Now
          </button>
        </form>

        <p className="mt-4">We value your privacy</p>
      </div>
    </div>
  );
}

export default Card;
