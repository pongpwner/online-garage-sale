import React from "react";
import "./collection-item.styles.scss";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";

const CollectionItem = ({ cartItem, name, price, url, addToCart }) => (
  <div className="collection-item">
    <img className="item-image" src={url} alt={name}></img>
    <div className="item-name">{name}</div>
    <div className="item-price">${price}</div>
    <button className="add-button" onClick={() => addToCart(cartItem)}>
      Add to Cart
    </button>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
