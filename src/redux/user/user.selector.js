import { createSelector } from "reselect";

const selectUser = (state) => state.user; //state.shop is the shop from root reducer

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
