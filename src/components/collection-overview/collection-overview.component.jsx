import React from "react";
import "./collection-overview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionOverview = ({ collection, title }) => (
  <div className="collection-overview">
    <h2 className="heading-2">{title}</h2>
    <div className="items">
      {collection.map((item) => (
        <CollectionItem
          cartItem={item}
          name={item.name}
          price={item.price}
          oldPrice={item.oldPrice}
          url={item.imageUrl}
          key={item.id}
          condition={item.condition}
        />
      ))}
    </div>
  </div>
);

export default CollectionOverview;
