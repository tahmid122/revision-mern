import React from "react";

const Input = ({ label, type, name, placeholder, changeFunc }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label} className="font-semibold text-base capitalize">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => changeFunc(e.target)}
        className="w-full px-4 py-2 outline-none border border-slate-300 rounded text-sm shadow-xs"
      />
    </div>
  );
};

export default Input;
