import React from "react";

const InputField = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="input-group">
      <input
        type="text"
        value={value}
        placeholder={placeholder || label}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default InputField;
