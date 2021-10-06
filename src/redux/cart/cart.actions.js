import { CART_ACTION_TYPES } from "./cart.types";

export const addToCart = (item) => ({
  type: CART_ACTION_TYPES.ADD_TO_CART,
  payload: item,
});

export const removeItemFromCart = (itemId) => ({
  type: CART_ACTION_TYPES.REMOVE_FROM_CART,
  payload: itemId,
});

export const changeQuantity = (change) => ({
  type: CART_ACTION_TYPES.CHANGE_QUANTITY,
  payload: change,
});

export const emptyCart = () => ({
  type: CART_ACTION_TYPES.EMPTY_CART,
});
