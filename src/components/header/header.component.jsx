import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.styles.scss";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const Header = ({ selectCurrentUser, signOutStart, selectCartItemsCount }) => (
  <div className="header">
    <span>
      <Link to="/">Home</Link>

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

const mapStateToProps = (state) => ({
  selectCurrentUser: selectCurrentUser(state),
  selectCartItemsCount: selectCartItemsCount(state),
});
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
