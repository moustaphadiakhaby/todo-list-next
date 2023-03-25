"use client";

import { useState } from "react";

const Toolbar = () => {
  const [input, setInput] = useState("");

  return (
    <div className="mx-auto my-4 flex w-max max-w-6xl justify-center gap-4 bg-white py-7 px-5">
      <button className="h-[50px] bg-red-500 py-3 px-6  text-white">
        Reset
      </button>
      <form className="flex justify-center gap-4">
        <input
          className="h-[50px] w-96 border-2 border-black px-5"
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="add your task"
        />
      </form>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => {
            sendData(input);
          }}
          className="h-[50px] bg-green-500  py-3  px-6 text-white"
        >
          Register Task
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
