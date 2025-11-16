import React from "react";

const Button = ({
  label,
  click = () => {},
  type = "button",
  color = "bg-base-color",
}) => {
  return (
    <button
      type={type}
      onClick={() => click()}
      className={`btn ${color} py-2 px-4 text-sm cursor-pointer rounded w-full font-semibold`}
    >
      {label}
    </button>
  );
};

export default Button;
