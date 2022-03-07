import React from "react";
import "./home.styles.scss";
import CategoryOverview from "../../components/category-overview/category-overview.component";
import Slideshow from "../../components/slideshow/slideshow.component";
import Hero from "../../components/hero/hero.component";

const Home = () => (
  <div className="home">
    <Hero />
    <div className="category-overview-container">
      <div className="background"></div>
      <h2 className="heading-2">Shop by Category</h2>
      <CategoryOverview />
    </div>
  </div>
);

export default Home;
