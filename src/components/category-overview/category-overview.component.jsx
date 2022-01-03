import React from "react";
import "./category-overview.styles.scss";
import Category from "../category/category.component";
import { render } from "@testing-library/react";
import { connect } from "react-redux";
import {
  selectBooks,
  selectClothing,
  selectElectronics,
  selectFurniture,
  selectGames,
  selectSale,
  selectSports,
  selectTools,
  selectToys,
} from "../../redux/shop/shop.selectors";

const CategoryOverview = ({
  electronics,
  toys,
  clothing,
  books,
  videoGames,
  sports,
  furniture,
  tools,
}) => {
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
    {
      category: "books",
      url: books[0].imageUrl,
      link: "/shop/books",
      id: 3,
    },
    {
      category: "games",
      url: videoGames[0].imageUrl,
      link: "/shop/games",
      id: 4,
    },
    {
      category: "sports",
      url: sports[0].imageUrl,
      link: "/shop/sports",
      id: 5,
    },
    {
      category: "furniture",
      url: furniture[0].imageUrl,
      link: "/shop/furniture",
      id: 6,
    },
    {
      category: "tools",
      url: tools[0].imageUrl,
      link: "/shop/tools",
      id: 7,
    },
  ];
  return (
    <div className="category-overview" id="shop-categories">
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
  books: selectBooks(state),
  videoGames: selectGames(state),
  sports: selectSports(state),
  furniture: selectFurniture(state),
  tools: selectTools(state),
});
export default connect(mapStateToProps)(CategoryOverview);
