import React from "react";
import "./collection-overview.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionOverview = ({ collection, title }) => (
  <div className="collection-overview">
    <h1>{title}</h1>
    <div className="items">
      {collection.map((item) => (
        <CollectionItem
          cartItem={item}
          name={item.name}
          price={item.price}
          salePrice={item.salePrice}
          url={item.imageUrl}
          key={item.id}
          condition={item.condition}
        />
      ))}
    </div>
  </div>
);
const mapStateToProps = createStructuredSelector({
  collection: (state) => selectCollection(state),
});
export default connect(mapStateToProps)(CollectionOverview);
