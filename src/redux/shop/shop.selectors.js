import { createSelector } from "reselect";

const selectShop = (state) => state.shop; //state.shop is the shop from root reducer

export const selectCollection = createSelector(
  [selectShop],
  (shop) => shop.collection
);

export const selectElectronics = createSelector(
  [selectCollection],

  (collection) => collection.filter((item) => item.category === "electronics")
);
export const selectToys = createSelector(
  [selectCollection],

  (collection) => collection.filter((item) => item.category === "toys")
);
export const selectClothing = createSelector([selectCollection], (collection) =>
  collection.filter((item) => item.category === "clothing")
);
export const selectSale = createSelector([selectCollection], (collection) =>
  collection.filter((item) => item.oldPrice !== undefined)
);
export const selectBooks = createSelector([selectCollection], (collection) =>
  collection.filter((item) => item.category === "books")
);
export const selectGames = createSelector([selectCollection], (collection) =>
  collection.filter((item) => item.category === "games")
);
export const selectSports = createSelector([selectCollection], (collection) =>
  collection.filter((item) => item.category === "sports")
);
export const selectFurniture = createSelector(
  [selectCollection],
  (collection) => collection.filter((item) => item.category === "furniture")
);
export const selectTools = createSelector([selectCollection], (collection) =>
  collection.filter((item) => item.category === "tools")
);
