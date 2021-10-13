import React, { useState } from "react";
import "./dropdown.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Dropdown = ({ children, options, hidden, setHidden }) => {
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
      <div onMouseEnter={() => setHidden(true)} className="background"></div>
    </div>
  );
};

export default Dropdown;
