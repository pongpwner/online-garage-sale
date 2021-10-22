import React from "react";
import "./home.styles.scss";
import CategoryOverview from "../../components/category-overview/category-overview.component";
import Slideshow from "../../components/slideshow/slideshow.component";

const Home = () => (
  <div className="home">
    <Slideshow />
    <h1>Shop by Category</h1>
    <CategoryOverview />
  </div>
);

export default Home;
