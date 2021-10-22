import React, { useEffect, useState, useRef } from "react";
import "./slideshow.styles.scss";
import Slide from "../slide/slide.component";
import { connect } from "react-redux";
import { selectSale } from "../../redux/shop/shop.selectors";
import { Link } from "react-router-dom";

const Slideshow = ({ sale }) => {
  const [hover, setHover] = useState(false);
  const [index, setIndex] = useState(0);
  const delay = 2500;
  const timeoutRef = useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === sale.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => timeoutRef.current;
  }, [index]);

  return (
    <Link to="/shop/sale">
      <div
        className="slideshow"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {sale.map((sale) => (
            <Slide url={sale.imageUrl} />
          ))}
        </div>
        <div className={`slide-text ${hover ? "hover" : ""}`}>Sale</div>
      </div>
    </Link>
  );
};

const mapStateToProps = (state) => ({
  sale: selectSale(state),
});

export default connect(mapStateToProps)(Slideshow);
