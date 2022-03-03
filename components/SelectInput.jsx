import React from "react";

const SelectInput = ({ label, options, name, value, onChange }) => {
  return (
    <label className="flex flex-col space-y-1">
      <span className="text-lg capitalize"> {label} </span>
      <select
        name={name}
        id={name}
        className="formInput capitalize"
        value={value}
        onChange={onChange}
      >
        {options.map((i) => (
          <option className="capitalize" key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectInput;
