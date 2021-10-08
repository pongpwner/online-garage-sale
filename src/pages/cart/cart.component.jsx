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
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const Cart = ({ emptyCart, selectCartTotal, selectCartItemsCount }) => (
  <div className="cart">
    <h1>Cart({selectCartItemsCount})</h1>

    <div class="empty-cart" onClick={emptyCart}>
      Empty Cart
    </div>

    <CartList />
    <div className="subtotal"> Cart Total: ${selectCartTotal}</div>

    <StripeCheckoutButton price={selectCartTotal} />
    <div className="test-warning">
      *use the following card for test payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/23- CVV:123
    </div>
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
