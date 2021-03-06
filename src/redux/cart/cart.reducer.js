import {
  addItemToCart,
  removeItemFromCart,
  changeQuantity,
} from "./cart.utils";
import { CART_ACTION_TYPES } from "./cart.types";
const INITIAL_STATE = {
  quantity: 0,
  cartItems: [],
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ACTION_TYPES.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case CART_ACTION_TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    case CART_ACTION_TYPES.CHANGE_QUANTITY:
      return {
        ...state,
        cartItems: changeQuantity(
          state.cartItems,
          action.payload.id,
          action.payload.input
        ),
      };

    case CART_ACTION_TYPES.EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
export default cartReducer;
