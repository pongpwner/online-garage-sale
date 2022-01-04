import React from "react";
import "./hero.styles.scss";
import Slideshow from "../slideshow/slideshow.component";
import arrow from "../../assets/icons/down-filled-triangular-arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="welcome">Welcome to the Online Garage Sale</div>
      <div className="hero-group">
        <div className="call-to-action one ">
          <div>Check out these awesome deals before they are gone!</div>
        </div>
        <Slideshow />
        <div className="call-to-action two">
          <div> And see what else we have for sale below</div>
          <a href="#shop-arrow">
            <img
              className="down-arrow"
              src={arrow}
              alt="down arrow"
              id="shop-arrow"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
//#shop-categories
