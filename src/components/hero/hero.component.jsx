import React from "react";
import "./hero.styles.scss";
import Slideshow from "../slideshow/slideshow.component";
import arrow from "../../assets/icons/down-filled-triangular-arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="welcome">Welcome to the Online Garage Sale</div>
      <div className="hero-group">
        <div className="call-to-action">
          <div>Check out these awesome deals before they are gone!</div>
          <div> And see what else we have for sale below</div>
          <a href="#shop-categories">
            <img className="down-arrow" src={arrow} alt="down arrow" />
          </a>
        </div>
        <Slideshow />
      </div>
    </div>
  );
};

export default Hero;
