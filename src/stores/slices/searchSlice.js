import { createSelector, createSlice } from "@reduxjs/toolkit";
import { MAX_PER_PAGE } from "../../constants";
import {
  searchUsersQry,
  searchCollectionsQry,
  searchPhotosQry,
} from "../middleware/search";

const initialState = {
  isLoadingSearchUsers: false,
  isLoadingSearchCollections: false,
  isLoadingSearchPhotos: false,
  searchUsers: null,
  searchCollections: null,
  searchPhotos: null,
  searchText: "",
  page: 1,
  per_page: MAX_PER_PAGE,
  error: null,
};

const { actions, reducer } = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchText: (state, { payload }) => {
      state.searchText = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(searchUsersQry.pending, (state) => {
      state.isLoadingSearchUsers = true;
    });
    builder.addCase(searchUsersQry.fulfilled, (state, { payload }) => {
      state.isLoadingSearchUsers = false;
      state.searchUsers = payload;
    });
    builder.addCase(searchUsersQry.rejected, (state, action) => {
      state.isLoadingSearchUsers = false;
      state.error = action.error;
    });
    // ===================================================
    // ===================================================
    // ===================================================
    builder.addCase(searchCollectionsQry.pending, (state) => {
      state.isLoadingSearchCollections = true;
    });
    builder.addCase(searchCollectionsQry.fulfilled, (state, { payload }) => {
      state.isLoadingSearchCollections = false;
      state.searchCollections = payload;
    });
    builder.addCase(searchCollectionsQry.rejected, (state, action) => {
      state.isLoadingSearchCollections = false;
      state.error = action.error;
    });
    // ===================================================
    // ===================================================
    // ===================================================
    builder.addCase(searchPhotosQry.pending, (state) => {
      state.isLoadingSearchPhotos = true;
    });
    builder.addCase(searchPhotosQry.fulfilled, (state, { payload }) => {
      state.isLoadingSearchPhotos = false;
      state.searchPhotos = payload.results;
    });
    builder.addCase(searchPhotosQry.rejected, (state, action) => {
      state.isLoadingSearchPhotos = false;
      state.error = action.error;
    });
  },
});

const selectRoot = (state) => state.search;
export const searchSelectors = {
  searchText: createSelector(selectRoot, (state) => state.searchText),
  searchUsers: createSelector(selectRoot, (state) => state.searchUsers),
  searchPhotos: createSelector(selectRoot, (state) => state.searchPhotos),
  searchCollections: createSelector(
    selectRoot,
    (state) => state.searchCollections
  ),
  isLoadingSearchUsers: createSelector(
    selectRoot,
    (state) => state.isLoadingSearchUsers
  ),
  isLoadingSearchCollections: createSelector(
    selectRoot,
    (state) => state.isLoadingSearchCollections
  ),
  isLoadingSearchPhotos: createSelector(
    selectRoot,
    (state) => state.isLoadingSearchPhotos
  ),
};

export const searchActions = {
  ...actions,
  searchUsersQry,
  searchCollectionsQry,
};
export const searchReducer = reducer;
