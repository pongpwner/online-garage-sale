import React from "react";
import "./dropdown.styles.scss";
import { Link } from "react-router-dom";

const Dropdown = ({ label, labelLink, dropdownList }) => {
  return (
    <div className="dropdown">
      <div className="dropdown-label">
        {labelLink ? <Link to={labelLink}> {label}</Link> : <div>{label}</div>}
      </div>
      <div className="dropdown-content">
        {dropdownList.map((option) => (
          <Link to={option.url}>{option.label}</Link>
        ))}
      </div>
      <div className="background"></div>
    </div>
  );
};

export default Dropdown;
