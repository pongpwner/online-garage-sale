import SHOP_DATA from "../../pages/shop/shop.data";
//import ShopActionsTypes from "./shop.types";
const INITIAL_STATE = {
  collection: SHOP_DATA,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default shopReducer;
