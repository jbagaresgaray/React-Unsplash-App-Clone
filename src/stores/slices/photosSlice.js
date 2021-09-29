import { createSelector, createSlice } from "@reduxjs/toolkit";
import { MAX_PER_PAGE } from "../../constants";
import {
  fetchListPhotos,
  getPhoto,
  getPhotoRelated,
  getRandomPhoto,
} from "../middleware/photos";
import uniqBy from "lodash/uniqBy";

const initialState = {
  isLoadingPhoto: false,
  isLoadingPhotos: false,
  isLoadingRelatedPhotos: false,
  isLoadingRandomPhoto: false,
  isLoadingRandomPhotos: false,
  photos: [],
  randomPhotos: [],
  relatedPhotos: [],
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
      state.isLoadingPhotos = false;

      if (payload.refresh) {
        state.photos = payload.data;
      } else {
        const tmpPhotos = [...state.photos];
        const newPhotos = tmpPhotos.concat(payload.data);
        state.photos = uniqBy(newPhotos, "id");
      }
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
    // ===================================================
    // ===================================================
    // ===================================================

    builder.addCase(getPhotoRelated.pending, (state) => {
      state.isLoadingRelatedPhotos = true;
    });
    builder.addCase(getPhotoRelated.fulfilled, (state, { payload }) => {
      console.log("getPhotoRelated: ", payload);
      state.isLoadingRelatedPhotos = false;
      state.relatedPhotos = payload.results;
    });
    builder.addCase(getPhotoRelated.rejected, (state, action) => {
      state.isLoadingRelatedPhotos = false;
      state.error = action.error;
    });
  },
});

const selectRoot = (state) => state.photos;
export const photosSelectors = {
  photos: createSelector(selectRoot, (state) => state.photos),
  relatedPhotos: createSelector(selectRoot, (state) => state.relatedPhotos),
  photo: createSelector(selectRoot, (state) => state.photo),
  randomPhoto: createSelector(selectRoot, (state) => state.randomPhoto),
  isLoadingPhoto: createSelector(selectRoot, (state) => state.isLoadingPhoto),
  isLoadingPhotos: createSelector(selectRoot, (state) => state.isLoadingPhotos),
  isLoadingRelatedPhotos: createSelector(
    selectRoot,
    (state) => state.isLoadingRelatedPhotos
  ),
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
