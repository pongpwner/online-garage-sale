import React, { useState } from "react";
import "./dropdown.styles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Dropdown = ({ options, hidden, setHidden, account, signout }) => {
  console.log(hidden);
  return hidden ? null : (
    <div className={`dropdown ${account ? "account" : ""}`}>
      <ul className="dropdown-list">
        {account ? (
          <div onClick={signout}>Sign Out</div>
        ) : (
          options.map((option) => (
            <li>
              <Link to={option.url}>{option.label}</Link>
            </li>
          ))
        )}
      </ul>
      <div onMouseEnter={() => setHidden(true)} className="background"></div>
    </div>
  );
};

export default Dropdown;
