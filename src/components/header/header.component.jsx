import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.styles.scss";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import Dropdown from "../dropdown/dropdown.component";
import { selectCategory } from "../../redux/shop/shop.selectors";

const Header = ({ selectCurrentUser, signOutStart, selectCartItemsCount }) => {
  const [hidden, setHidden] = useState(true);
  const dropdownOptions = [
    { label: "electronics", url: "/shop/electronics", id: 0 },
    { label: "toys", url: "/shop/toys", id: 1 },
  ];
  return (
    <div className="header">
      <span className="header-links">
        <Link to="/">Home </Link>
        <div
          className="shop"
          onMouseOver={() => setHidden(false)}
          onMouseLeave={() => setHidden(true)}
        >
          <Link to="/shop">Shop</Link>
          <Dropdown options={dropdownOptions} hidden={hidden}></Dropdown>
        </div>

        <Link to="/cart">Cart({selectCartItemsCount})</Link>
      </span>

      {selectCurrentUser ? (
        <div className="user-name">Welcome {selectCurrentUser.displayName}</div>
      ) : null}

      {selectCurrentUser ? (
        <div className="sign-out" onClick={signOutStart}>
          Sign Out
        </div>
      ) : (
        <div className="sign-in">
          <Link to="/sign-in">Sign In</Link>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  selectCurrentUser: selectCurrentUser(state),
  selectCartItemsCount: selectCartItemsCount(state),
});
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
