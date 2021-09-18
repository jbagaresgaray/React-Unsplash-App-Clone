import { createSelector, createSlice } from "@reduxjs/toolkit";
import { MAX_PER_PAGE } from "../../constants";
import {
  fetchListPhotos,
  getPhoto,
  getRandomPhoto,
} from "../middleware/photos";
import uniqBy from "lodash/uniqBy";

const initialState = {
  isLoadingPhoto: false,
  isLoadingPhotos: false,
  isLoadingRandomPhoto: false,
  isLoadingRandomPhotos: false,
  photos: [],
  randomPhotos: [],
  photo: null,
  randomPhoto: null,
  page: 1,
  per_page: MAX_PER_PAGE,
  order_by: "position",
  error: null,
};

const { actions, reducer } = createSlice({
  name: "photos",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    decrementPage: (state) => {
      state.page -= 1;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchListPhotos.pending, (state) => {
      state.isLoadingPhotos = true;
    });
    builder.addCase(fetchListPhotos.fulfilled, (state, { payload }) => {
      const tmpPhotos = [...state.photos];
      state.isLoadingPhotos = false;
      // state.topics = state.topics.concat(payload);
      const newPhotos = tmpPhotos.concat(payload);
      state.photos = uniqBy(newPhotos, "id");
    });
    builder.addCase(fetchListPhotos.rejected, (state, action) => {
      state.isLoadingPhotos = false;
      state.error = action.error;
    });

    // ===================================================
    // ===================================================
    // ===================================================

    builder.addCase(getPhoto.pending, (state) => {
      state.isLoadingPhoto = true;
    });
    builder.addCase(getPhoto.fulfilled, (state, { payload }) => {
      state.isLoadingPhoto = false;
      state.photo = payload;
    });
    builder.addCase(getPhoto.rejected, (state, action) => {
      state.isLoadingPhoto = false;
      state.error = action.error;
    });
    // ===================================================
    // ===================================================
    // ===================================================

    builder.addCase(getRandomPhoto.pending, (state) => {
      state.isLoadingRandomPhoto = true;
    });
    builder.addCase(getRandomPhoto.fulfilled, (state, { payload }) => {
      state.isLoadingRandomPhoto = false;
      state.randomPhoto = payload;
    });
    builder.addCase(getRandomPhoto.rejected, (state, action) => {
      state.isLoadingRandomPhoto = false;
      state.error = action.error;
    });
  },
});

const selectRoot = (state) => state.photos;
export const photosSelectors = {
  photos: createSelector(selectRoot, (state) => state.photos),
  photo: createSelector(selectRoot, (state) => state.photo),
  randomPhoto: createSelector(selectRoot, (state) => state.randomPhoto),
  isLoadingPhoto: createSelector(selectRoot, (state) => state.isLoadingPhoto),
  isLoadingPhotos: createSelector(selectRoot, (state) => state.isLoadingPhotos),
  isLoadingRandomPhoto: createSelector(
    selectRoot,
    (state) => state.isLoadingRandomPhoto
  ),
};

export const photosActions = {
  ...actions,
  fetchListPhotos,
  getPhoto,
  getRandomPhoto,
};
export const photosReducer = reducer;
