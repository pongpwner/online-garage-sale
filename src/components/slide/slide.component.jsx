import React from "react";
import "./slide.styles.scss";

const Slide = ({ url }) => (
  <div className="slide">
    <img src={url} alt="used item"></img>
  </div>
);
export default Slide;
