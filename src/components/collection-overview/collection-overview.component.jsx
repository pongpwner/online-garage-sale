import React from "react";
import "./collection-overview.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionOverview = ({ collection }) => (
  <div className="collection-overview">
    {console.log(collection)}
    {collection.map((item) => (
      <CollectionItem
        cartItem={item}
        name={item.name}
        price={item.price}
        url={item.imageUrl}
        key={item.id}
      />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collection: (state) => selectCollection(state),
});
export default connect(mapStateToProps)(CollectionOverview);
