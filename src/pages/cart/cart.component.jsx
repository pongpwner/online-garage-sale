import React from "react";
import "./cart.styles.scss";
import { connect } from "react-redux";
import CartList from "../../components/cart-list/cart-list.component";
import { emptyCart } from "../../redux/cart/cart.actions";
import { Link } from "react-router-dom";
import {
  selectCartTotal,
  selectCartItemsCount,
} from "../../redux/cart/cart.selectors";

const Cart = ({ emptyCart, selectCartTotal, selectCartItemsCount }) => (
  <div className="cart">
    <h1>Cart({selectCartItemsCount})</h1>

    <div class="empty-cart" onClick={emptyCart}>
      Empty Cart
    </div>

    <CartList />
    <div className="subtotal"> Cart Total: ${selectCartTotal}</div>
    <Link to="/checkout">Go to Checkout</Link>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  emptyCart: () => dispatch(emptyCart()),
});
const mapStateToProps = (state) => ({
  selectCartTotal: selectCartTotal(state),
  selectCartItemsCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
