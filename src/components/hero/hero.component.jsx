import React from "react";
import "./hero.styles.scss";
import Slideshow from "../slideshow/slideshow.component";

const Hero = () => {
  return (
    <div className="hero">
      <div className="welcome">Welcome to the Online Garage Sale</div>
      <div className="hero-group">
        <div className="call-to-action">
          <div>Check out these awesome deals before they are gone!</div>
          <div> And see what else we have below V</div>
        </div>
        <Slideshow />
      </div>
    </div>
  );
};

export default Hero;
