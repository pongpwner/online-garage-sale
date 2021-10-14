import React, { useState, useEffect } from "react";
import "./shop.styles.scss";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {
  selectElectronics,
  selectCollection,
  selectToys,
  selectClothing,
} from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import { Switch, Route } from "react-router";
import {
  sortHighToLow,
  sortLowToHigh,
  sortOriginal,
} from "../../redux/shop/shop.actions";

const Shop = ({
  selectCollection,
  selectElectronics,
  selectClothing,
  selectToys,
  sortLowToHigh,
  sortHighToLow,
  sortOriginal,
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
      </Switch>
    </div>
  );
};
const mapStateToProps = (state) => ({
  selectCollection: selectCollection(state),
  selectElectronics: selectElectronics(state),
  selectToys: selectToys(state),
  selectClothing: selectClothing(state),
});

const mapDispatchToProps = (dispatch) => ({
  sortLowToHigh: () => dispatch(sortLowToHigh()),
  sortHighToLow: () => dispatch(sortHighToLow()),
  sortOriginal: () => dispatch(sortOriginal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
