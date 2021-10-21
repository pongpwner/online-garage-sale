import React from "react";
import "./home.styles.scss";
import CategoryOverview from "../../components/category-overview/category-overview.component";

const Home = () => (
  <div className="home">
    <div> carosel that goes through shop items</div>
    <CategoryOverview />
  </div>
);

export default Home;
