import React, { useEffect, useState } from "react";

function Input({ id, value, handleChange, error, label, name, pattern,placeholder }) {
  const [focused, setFocused] = useState(false);
  function handleFocus() {
    setFocused(true);
  }

  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input
        pattern={pattern}
        name={name}
        placeholder={placeholder}
        id={id}
        type="text"
        value={value}
        onChange={handleChange}
        required="required"
        onBlur={handleFocus}
        focused={focused.toString()}
      />

      <p>
        {id !== "yy" && value === ""
          ? error.empty
          : /[a-z]/.test(value) && id !== "name"
          ? error.nan
          : " "}
      </p>
    </div>
  );
}

export default Input;
