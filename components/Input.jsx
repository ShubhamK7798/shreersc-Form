import React, { memo } from "react";

const Input = ({ onChange, value, type, name, placeholder, className, label }) => {
  return (
    <label className="flex flex-col space-y-1  ">
      <span className="text-lg capitalize"> {label}</span>

      <input
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        className={className}
        required
      />
    </label>
  );
};

export default memo(Input);
