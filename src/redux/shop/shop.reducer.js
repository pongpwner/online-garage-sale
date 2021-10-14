import SHOP_DATA from "../../pages/shop/shop.data";
import SHOP_ACTION_TYPES from "./shop.types";

const INITIAL_STATE = {
  collection: SHOP_DATA,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_ACTION_TYPES.SORT_lOW_TO_HIGH:
      return {
        collection: [
          ...state.collection.sort((item1, item2) => item1.price - item2.price),
        ],
      };
    case SHOP_ACTION_TYPES.SORT_HIGH_TO_LOW:
      return {
        collection: [
          ...state.collection.sort((item1, item2) => item2.price - item1.price),
        ],
      };

    case SHOP_ACTION_TYPES.SORT_ORIGINAL:
      return {
        collection: [
          ...state.collection.sort((item1, item2) => item1.id - item2.id),
        ],
      };
    default:
      return state;
  }
};
export default shopReducer;
