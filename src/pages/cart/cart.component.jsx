import React from "react";
import "./cart.styles.scss";
import { connect } from "react-redux";
import CartList from "../../components/cart-list/cart-list.component";
import { emptyCart } from "../../redux/cart/cart.actions";

import PaymentForm from "../../components/payment-form/payment-form.component";
import {
  selectCartTotal,
  selectCartItemsCount,
} from "../../redux/cart/cart.selectors";

const Cart = ({ emptyCart, selectCartTotal, selectCartItemsCount }) => (
  <div className="cart">
    <div className="section1">
      <h1 className="section-item">Cart({selectCartItemsCount})</h1>

      <div className="empty-cart section-item" onClick={emptyCart}>
        Empty Cart
      </div>
    </div>

    <CartList />
    <div className="section3">
      <div className="subtotal section-item">
        {" "}
        Cart Total: ${selectCartTotal}
      </div>
      <PaymentForm />
    </div>
    <div className="test-warning ">
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
