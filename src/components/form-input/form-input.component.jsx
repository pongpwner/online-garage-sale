import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, handleChange, ...otherProps }) => (
  <div className="group">
    <label
      className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}
    >
      {" "}
      {label}
    </label>
    <input className="form-input" onChange={handleChange} {...otherProps} />
  </div>
);

export default FormInput;
