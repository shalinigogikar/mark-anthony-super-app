import React from "react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit";
}

export default function Button({
  text,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      className="
      w-full
      rounded-lg
      bg-green-600
      py-3
      text-white
      font-semibold
      hover:bg-green-700
      transition
      cursor-pointer
      "
    >
      {text}
    </button>
  );
}