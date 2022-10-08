import React from "react";
import InputField from "./InputField";

function Form({ value, handleChange }) {
  return (
    <div className="form__section">
      <div className="form__container">
        <InputField value={value} handleChange={handleChange} />
      </div>
    </div>
  );
}

export default Form;
