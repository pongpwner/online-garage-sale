import React from "react";
import "./collection-item.styles.scss";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({
  cartItem,
  name,
  price,
  salePrice,
  url,
  addToCart,
  condition,
}) => (
  <div className="collection-item">
    <img className="item-image" src={url} alt={name}></img>
    <div className="item-info">
      <div className="item-name">{name}</div>
      <div className="condition">{condition}</div>
      <div className="item-price">
        <span className={` ${salePrice ? "old-price" : ""}`}>${price}</span>
        <span className={` ${salePrice ? "new-price" : ""}`}>
          {salePrice ? `$${salePrice}` : ""}
        </span>
      </div>
    </div>

    <CustomButton onClick={() => addToCart(cartItem)}>Add To Cart</CustomButton>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
