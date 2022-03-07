import React from "react";
import "./hero.styles.scss";
import Slideshow from "../slideshow/slideshow.component";
import arrow from "../../assets/icons/down-filled-triangular-arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="background"></div>
      <div className="content">
        <h1 className="welcome heading-1">Online Garage Sale</h1>
        <div className="hero-group">
          <div className="call-to-action one ">
            <span className="call-to-action-one-text">
              Check out these awesome deals before they are gone!
            </span>
            <Slideshow />
          </div>

          <div className="call-to-action two">
            <a href="#shop-categories">
              <div className="down-arrow">&nbsp;</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
//#shop-categories
