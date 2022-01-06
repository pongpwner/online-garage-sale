import React, { useState } from "react";
import "./cart-dropdown.styles.scss";
import cartIcon from "../../assets/icons/shopping-cart-30.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";

import CartDropdownItem from "../cart-dropdown-item/cart-dropdown-item.component";

const CartDropdown = ({ itemCount, cartItems, cartTotal }) => {
  const [active, setActive] = useState(false);

  function toggle() {
    setActive(!active);
  }
  return (
    <div className="cart-dropdown" onClick={toggle}>
      <Link to="/cart">
        <button type="button" className="cart-icon-container">
          <div className="cart-quantity">{itemCount} </div>
          <img className="cart-icon" src={cartIcon} alt="cart"></img>
        </button>
      </Link>
      <div className={`dropdown-content ${active ? "active" : ""}`}>
        {itemCount < 1 ? (
          <div className="empty-cart">cart empty</div>
        ) : (
          <div className="cart-list">
            <div className="cart-total">total:${cartTotal}</div>
            <div className="cart-items">
              {cartItems.map((cartItem) => (
                <CartDropdownItem
                  name={cartItem.name}
                  price={
                    cartItem.salePrice ? cartItem.salePrice : cartItem.price
                  }
                  url={cartItem.imageUrl}
                  key={cartItem.id}
                  id={cartItem.id}
                  quantity={cartItem.quantity}
                />
              ))}
            </div>
            <Link to="cart" onClick={() => setActive(false)}>
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  cartTotal: selectCartTotal(state),
});

export default connect(mapStateToProps)(CartDropdown);
