import React from "react";
import "./home.styles.scss";
import CategoryOverview from "../../components/category-overview/category-overview.component";
import Slideshow from "../../components/slideshow/slideshow.component";
import Hero from "../../components/hero/hero.component";

const Home = () => (
  <div className="home">
    <Hero />

    <h1>Shop by Category</h1>
    <CategoryOverview />
  </div>
);

export default Home;
