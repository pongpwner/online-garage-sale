import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./mobile-nav.styles.scss";
const MobileNav = ({ label, labelLink, dropdownList }) => {
  const [active, setActive] = useState(false);
  function toggle() {
    setActive(!active);
  }
  return (
    <div className="mobile-nav">
      <div className="hamburger" onClick={toggle}>
        <span>a</span>
        <span></span>
        <span></span>
      </div>
      <div className={`dropdown-content ${active ? "active" : ""} `}>
        {dropdownList.map((option) => (
          <Link to={option.url} onClick={() => setActive(false)}>
            {option.label}
          </Link>
        ))}
      </div>
      <div
        className={`background ${active ? "active" : ""}`}
        onClick={() => setActive(false)}
      ></div>
    </div>
  );
};
export default MobileNav;
