import React from "react";
import "./shop.styles.scss";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {
  selectElectronics,
  selectCollection,
  selectToys,
} from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import { Switch, Route } from "react-router";

const Shop = ({ selectCollection, selectElectronics, selectToys }) => (
  <div className="shop">
    <Switch>
      <Route exact path="/shop">
        <CollectionOverview collection={selectCollection} title="All" />
      </Route>

      <Route exact path="/shop/electronics">
        <CollectionOverview
          collection={selectElectronics}
          title="Electronics"
        />
      </Route>
      <Route exact path="/shop/toys">
        <CollectionOverview collection={selectToys} title="Toys" />
      </Route>
    </Switch>
  </div>
);

const mapStateToProps = (state) => ({
  selectCollection: selectCollection(state),
  selectElectronics: selectElectronics(state),
  selectToys: selectToys(state),
});

export default connect(mapStateToProps)(Shop);
