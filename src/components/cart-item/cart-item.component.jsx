import React from "react";
import "./cart-item.styles.scss";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  changeQuantity,
} from "../../redux/cart/cart.actions";
const CartItem = ({
  name,
  price,
  quantity,
  url,
  id,
  removeItemFromCart,
  changeQuantity,
}) => (
  <div className="cart-item">
    <img className="item-image" src={url} alt={name} />
    <div className="cart-item-info-container">
      <div className="item-name cart-item-info">{name}</div>
      <div className="price cart-item-info">${price}</div>

      <div className="quantity-container cart-item-info">
        <button
          className="change-quantity"
          onClick={() => changeQuantity({ id, input: -1 })}
        >
          -
        </button>
        <div className="quantity"> qty:{quantity} </div>
        <button
          className="change-quantity"
          onClick={() => changeQuantity({ id, input: 1 })}
        >
          +
        </button>
      </div>
      <div
        className="remove cart-item-info"
        onClick={() => removeItemFromCart(id)}
      >
        delete
      </div>
    </div>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (itemId) => dispatch(removeItemFromCart(itemId)),
  changeQuantity: (change) => dispatch(changeQuantity(change)),
});

export default connect(null, mapDispatchToProps)(CartItem);
