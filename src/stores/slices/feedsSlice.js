import { createSelector, createSlice } from "@reduxjs/toolkit";
import { MAX_PER_PAGE } from "../../constants";
import { fetchFollowings } from "../middleware/feeds";

const initialState = {
  isLoadingFollowing: false,
  followings: [],
  page: 1,
  per_page: MAX_PER_PAGE,
  error: null,
};

const { actions, reducer } = createSlice({
  name: "feeds",
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchFollowings.pending, (state) => {
      state.isLoadingFollowing = true;
    });
    builder.addCase(fetchFollowings.fulfilled, (state, { payload }) => {
      state.isLoadingFollowing = false;
      state.followings = payload;
    });
    builder.addCase(fetchFollowings.rejected, (state, action) => {
      state.isLoadingFollowing = false;
      state.error = action.error;
    });
  },
});

const selectRoot = (state) => state.feeds;
export const feedsSelectors = {
  followings: createSelector(selectRoot, (state) => state.followings),
  isLoadingFollowing: createSelector(
    selectRoot,
    (state) => state.isLoadingFollowing
  ),
};

export const feedsActions = {
  ...actions,
  fetchFollowings
};
export const feedsReducer = reducer;
