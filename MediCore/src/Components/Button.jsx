import React from "react";
import { Link } from "react-router-dom";

function Button({ text, work }) {
  return (
    <button
      onClick={work}
      className="bg-yellow-500 m-[0.5em] p-[0.5em] border-2 rounded-[0.5em]"
    >
      {text}
    </button>
  );
}

export default Button;
