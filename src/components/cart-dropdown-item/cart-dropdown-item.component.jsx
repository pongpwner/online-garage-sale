import React from "react";
import "./cart-dropdown-item.styles.scss";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { removeItemFromCart } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
const CartDropdownItem = ({
  name,
  price,
  quantity,
  url,
  id,
  removeItemFromCart,
  changeQuantity,
}) => {
  return (
    <div className="cart-dropdown-item">
      <img src={url} alt={name}></img>

      <div className="item-name">{name}</div>

      <div className="group1">
        <div className="quantity">{quantity}</div>
        <div className="item-price">${price}</div>
      </div>
      <button type="button" onClick={() => removeItemFromCart(id)}>
        remove
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (itemId) => dispatch(removeItemFromCart(itemId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartDropdownItem);
