import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";

import "./cart-list.styles.scss";

const CartList = ({ selectCartItems }) => (
  <div className="cart-list">
    {selectCartItems.map((cartItem) => (
      <CartItem
        name={cartItem.name}
        price={cartItem.salePrice ? cartItem.salePrice : cartItem.price}
        url={cartItem.imageUrl}
        key={cartItem.id}
        id={cartItem.id}
        quantity={cartItem.quantity}
      />
    ))}
  </div>
);
const mapStateToProps = (state) => ({
  selectCartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartList);
