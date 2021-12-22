import React from "react";
import "./cart-dropdown.styles.scss";
import cartIcon from "../../assets/icons/shopping-cart-30.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ itemCount, cartItems }) => {
  return (
    <div className="cart-dropdown">
      <Link to="/cart">
        <button type="button" className="cart-icon-container">
          <div className="cart-quantity">{itemCount} </div>
          <img className="cart-icon" src={cartIcon} alt="cart"></img>
        </button>
      </Link>
      <div className="dropdown-content">
        {itemCount < 1 ? (
          <div>cart empty</div>
        ) : (
          <div className="cart-list">
            {cartItems.map((cartItem) => (
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
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
