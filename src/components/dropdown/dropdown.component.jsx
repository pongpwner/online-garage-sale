import React, { useState } from "react";
import "./dropdown.styles.scss";
import { Link } from "react-router-dom";

const Dropdown = ({ label, labelLink, dropdownList }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="dropdown desktop">
      <div
        className="dropdown-label"
        onMouseOver={() => setActive(true)}
        onClick={() => setActive(false)}
      >
        {labelLink ? <Link to={labelLink}> {label}</Link> : <div>{label}</div>}
      </div>
      <div
        onMouseOver={() => setActive(true)}
        className={`dropdown-content ${active ? "active" : ""}`}
      >
        {dropdownList.map((option) => (
          <Link to={option.url} onClick={() => setActive(false)}>
            {option.label}
          </Link>
        ))}
      </div>
      <div
        className={`background ${active ? "active" : ""}`}
        onMouseOver={() => setActive(false)}
      ></div>
    </div>
  );
};

export default Dropdown;
