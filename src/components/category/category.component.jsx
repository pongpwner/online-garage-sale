import React, { useState } from "react";
import "./category.styles.scss";
import { Link } from "react-router-dom";

const Category = ({ url, category, link }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="category"
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
    >
      <Link to={link}>
        <img
          className={`category-image ${hover ? "hover" : ""}`}
          src={url}
          alt={category}
        ></img>
        <div className="category-text">{category}</div>
      </Link>
    </div>
  );
};
export default Category;
