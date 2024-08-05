import React from 'react';

function FormSelect({ label, name, value, handleChange, options = [] }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        value={value}
        onChange={(e) => handleChange(name, e.target.value)}
      >
        <option value="" disabled selected={value === ""}>
          Select your Ans
        </option>
        {options.map(group => (
          <optgroup key={group.label} label={group.label}>
            {group.options.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </>
  );
}

export default FormSelect;
