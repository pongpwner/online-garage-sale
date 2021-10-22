import React, { useState, useEffect } from "react";
import "./shop.styles.scss";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {
  selectElectronics,
  selectCollection,
  selectToys,
  selectClothing,
  selectBooks,
  selectFurniture,
  selectGames,
  selectSports,
  selectTools,
  selectSale,
} from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import { Switch, Route } from "react-router";
import {
  sortHighToLow,
  sortLowToHigh,
  sortOriginal,
} from "../../redux/shop/shop.actions";

const Shop = ({
  sortOriginal,
  sortLowToHigh,
  sortHighToLow,
  selectCollection,
  selectBooks,
  selectClothing,
  selectElectronics,
  selectFurniture,
  selectGames,
  selectSale,
  selectSports,
  selectTools,
  selectToys,
}) => {
  const [dropdown, setDropdown] = useState("none");
  const handleChange = (event) => {
    setDropdown(event.target.value);
  };

  useEffect(() => {
    switch (dropdown) {
      case "none":
        return sortOriginal();
      case "low":
        return sortLowToHigh();
      case "high":
        return sortHighToLow();

      default:
        return;
    }
  }, [sortOriginal, sortLowToHigh, sortHighToLow, dropdown]);

  return (
    <div className="shop">
      <label for="sort by">Sort By Price </label>
      <select
        name="sort by"
        onChange={(event) => handleChange(event)}
        value={dropdown}
      >
        <option value="none">sort by</option>
        <option value="low">low to high</option>
        <option value="high">high to low</option>
      </select>
      <Switch>
        <Route exact path="/shop">
          <CollectionOverview collection={selectCollection} title="All" />
        </Route>

        <Route path="/shop/electronics">
          <CollectionOverview
            collection={selectElectronics}
            title="Electronics"
          />
        </Route>
        <Route path="/shop/toys">
          <CollectionOverview collection={selectToys} title="Toys" />
        </Route>
        <Route path="/shop/clothing">
          <CollectionOverview collection={selectClothing} title="Clothing" />
        </Route>
        <Route path="/shop/books">
          <CollectionOverview collection={selectBooks} title="Books" />
        </Route>

        <Route path="/shop/games">
          <CollectionOverview collection={selectGames} title="Games" />
        </Route>
        <Route path="/shop/sports">
          <CollectionOverview collection={selectSports} title="Sports" />
        </Route>
        <Route path="/shop/furniture">
          <CollectionOverview collection={selectFurniture} title="Furniture" />
        </Route>
        <Route path="/shop/tools">
          <CollectionOverview collection={selectTools} title="Tools" />
        </Route>
        <Route path="/shop/sale">
          <CollectionOverview collection={selectSale} title="Sale" />
        </Route>
      </Switch>
    </div>
  );
};
const mapStateToProps = (state) => ({
  selectCollection: selectCollection(state),
  selectElectronics: selectElectronics(state),
  selectToys: selectToys(state),
  selectClothing: selectClothing(state),
  selectBooks: selectBooks(state),
  selectVideoGames: selectGames(state),
  selectSports: selectSports(state),
  selectFurniture: selectFurniture(state),
  selectTools: selectTools(state),
  selectSale: selectSale(state),
});

const mapDispatchToProps = (dispatch) => ({
  sortLowToHigh: () => dispatch(sortLowToHigh()),
  sortHighToLow: () => dispatch(sortHighToLow()),
  sortOriginal: () => dispatch(sortOriginal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
