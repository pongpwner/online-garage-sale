import React from "react";
import "./collection-item.styles.scss";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({
  cartItem,
  name,
  price,
  oldPrice,
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
        <span className={` ${oldPrice ? "old-price" : ""}`}>
          {oldPrice ? `$${oldPrice}` : ``}
        </span>
        <span className={` ${oldPrice ? "new-price" : ""}`}>${price}</span>
      </div>
    </div>

    <CustomButton onClick={() => addToCart(cartItem)}>Add To Cart</CustomButton>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
