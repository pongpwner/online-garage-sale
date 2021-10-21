import React from "react";
import "./category-overview.styles.scss";
import Category from "../category/category.component";
import { render } from "@testing-library/react";
import { connect } from "react-redux";
import {
  selectClothing,
  selectElectronics,
  selectToys,
} from "../../redux/shop/shop.selectors";

const CategoryOverview = ({ electronics, toys, clothing }) => {
  const categories = [
    {
      category: "clothing",
      url: clothing[0].imageUrl,
      link: "/shop/clothing",
      id: 0,
    },
    {
      category: "electronics",
      url: electronics[0].imageUrl,
      link: "/shop/electronics",
      id: 1,
    },
    {
      category: "toys",
      url: toys[0].imageUrl,
      link: "/shop/toys",
      id: 2,
    },
  ];
  return (
    <div className="category-overview">
      {categories.map((category) => (
        <Category
          key={category.id}
          url={category.url}
          link={category.link}
          category={category.category}
        />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  electronics: selectElectronics(state),
  clothing: selectClothing(state),
  toys: selectToys(state),
});
export default connect(mapStateToProps)(CategoryOverview);
