import SHOP_ACTION_TYPES from "./shop.types";

export const sortLowToHigh = () => ({
  type: SHOP_ACTION_TYPES.SORT_lOW_TO_HIGH,
});
export const sortHighToLow = () => ({
  type: SHOP_ACTION_TYPES.SORT_HIGH_TO_LOW,
});

export const sortOriginal = () => ({
  type: SHOP_ACTION_TYPES.SORT_ORIGINAL,
});
