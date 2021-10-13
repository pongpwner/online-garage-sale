import React, { useState } from "react";
import "./dropdown.styles.scss";
import { Link } from "react-router-dom";

const Dropdown = ({ children, options, hidden }) => {
  console.log(hidden);
  return hidden ? null : (
    <div className="dropdown">
      {children}
      <ul className="dropdown-list">
        {options.map((option) => (
          <li>
            <Link to={option.url}>{option.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dropdown;
