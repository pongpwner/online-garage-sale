import { createSelector } from "reselect";

const selectShop = (state) => state.shop; //state.shop is the shop from root reducer

export const selectCollection = createSelector(
  [selectShop],
  (shop) => shop.collection
);

export const selectElectronics = createSelector(
  [selectCollection],

  (collection) => collection.filter((item) => item.category === "electronic")
);
