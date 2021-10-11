import Header from "./components/header/header.component";
import "./App.css";
import Shop from "./pages/shop/shop.component";
import Cart from "./pages/cart/cart.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Checkout from "./pages/checkout/checkout.component";
import { Switch, Route, Router, Redirect, withRouter } from "react-router-dom";
import { checkUserSession } from "./redux/user/user.actions";
import { useEffect } from "react";
import { connect } from "react-redux";
import browserHistory from "./history.js";

function App({ checkUserSession }) {
  useEffect(checkUserSession, [checkUserSession]);
  return (
    <Router history={browserHistory}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path="/sign-in" component={SignInAndSignUp} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
}

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(null, mapDispatchToProps)(App);
