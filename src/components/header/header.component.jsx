import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.styles.scss";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import Dropdown from "../dropdown/dropdown.component";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import cartIcon from "../../assets/icons/shopping-cart-30.png";
import logo from "../../assets/icons/ogs-logo.png";
import AccountDropdown from "../account-dropdown/account-dropdown.component";
import MobileNav from "../mobile-nav/mobile-nav.component";
import {
  selectCategory,
  selectElectronics,
} from "../../redux/shop/shop.selectors";

const Header = ({ selectCurrentUser, signOutStart, selectCartItemsCount }) => {
  const [shopDropdownHidden, setShopDropdownHidden] = useState(true);
  const [accountDropdownHidden, setAccountDropdownHidden] = useState(true);
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
      <div className="header-links group1">
        <Link to="/">
          <img className="logo" src={logo} alt="logo"></img>{" "}
        </Link>
        <MobileNav
          labelLink="/shop"
          label="Shop"
          dropdownList={dropdownOptions}
        />

        <Dropdown
          labelLink="/shop"
          label="Shop"
          dropdownList={dropdownOptions}
        />
      </div>
      <div className="header-links group2">
        <AccountDropdown signout={signOutStart} />

        <CartDropdown itemCount={selectCartItemsCount} />
      </div>
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
