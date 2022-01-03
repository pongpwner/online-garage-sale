import React from "react";
import "./account-dropdown.styles.scss";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { Link } from "react-router-dom";

const AccountDropdown = ({ currentUser, signout }) => {
  return (
    <div>
      {currentUser ? (
        <div className="account-dropdown">
          <div className="dropdown-label">Hello, {currentUser.displayName}</div>

          <div className="dropdown-content">
            <div className="sign-out" onClick={signout}>
              Sign Out
            </div>
          </div>
          <div className="background"></div>
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
  currentUser: selectCurrentUser(state),
});
export default connect(mapStateToProps)(AccountDropdown);
