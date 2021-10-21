import React from "react";
import "./category.styles.scss";
import { Link } from "react-router-dom";

const Category = ({ url, category, link }) => (
  <div className="category">
    <Link to={link}>
      <img className="category-image" src={url} alt={category}></img>
      <div className="category-text">{category}</div>
    </Link>
  </div>
);

export default Category;
