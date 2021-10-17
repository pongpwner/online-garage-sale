import { combineReducers } from "redux";
// import userReducer from "./user/user.reducer";
// import cartReducer from "./cart/cart.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
//persist config is used for local storage
const persistConfig = {
  key: "root",
  storage,

  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  cart: cartReducer,
  shop: shopReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
