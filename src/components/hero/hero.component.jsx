import React from "react";
import "./hero.styles.scss";
import Slideshow from "../slideshow/slideshow.component";
import arrow from "../../assets/icons/down-filled-triangular-arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="background"></div>
      <div className="content">
        <h1 className="welcome">Online Garage Sale</h1>
        <div className="hero-group">
          <div className="call-to-action one ">
            <span className="call-to-action-one-text">
              Check out these awesome deals before they are gone!
            </span>
            <Slideshow />
          </div>

          <div className="call-to-action two">
            <div> And see what else we have for sale below</div>
            <a href="#shop-categories">
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
    </div>
  );
};

export default Hero;
//#shop-categories
