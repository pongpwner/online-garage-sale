import Header from "./components/header/header.component";
import "./App.css";
import Shop from "./pages/shop/shop.component";
import Cart from "./pages/cart/cart.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Checkout from "./pages/checkout/checkout.component";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Shop} />
        <Route path="/cart" component={Cart} />
        <Route path="/sign-in" component={SignInAndSignUp} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
}

export default App;
