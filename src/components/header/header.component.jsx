import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.styles.scss";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import Dropdown from "../dropdown/dropdown.component";
import {
  selectCategory,
  selectElectronics,
} from "../../redux/shop/shop.selectors";

const Header = ({ selectCurrentUser, signOutStart, selectCartItemsCount }) => {
  const [hidden, setHidden] = useState(true);
  const dropdownOptions = [
    { label: "sale", url: "/shop/sale", id: -1 },
    { label: "clothing", url: "/shop/clothing", id: 0 },
    { label: "electronics", url: "/shop/electronics", id: 1 },
    { label: "toys", url: "/shop/toys", id: 2 },
    { label: "books", url: "/shop/books", id: 3 },
    { label: "games", url: "/shop/games", id: 4 },
    { label: "sports", url: "/shop/sports", id: 5 },
    { label: "furniture", url: "/shop/furniture", id: 6 },
    { label: "tools", url: "/shop/tools", id: 7 },
  ];
  return (
    <div className="header">
      <span className="header-links">
        <Link to="/">Home </Link>
        <div
          className="shop"
          onMouseOver={() => setHidden(false)}
          onMouseLeave={() => setHidden(true)}
          onClick={() => setHidden(true)}
        >
          <Link to="/shop">Shop</Link>
          <Dropdown
            options={dropdownOptions}
            hidden={hidden}
            setHidden={setHidden}
          ></Dropdown>
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
