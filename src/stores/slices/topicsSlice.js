import { createSelector, createSlice } from "@reduxjs/toolkit";
import uniqBy from "lodash/uniqBy";

import { MAX_PER_PAGE } from "../../constants";
import { fetchListTopics, getTopic, getTopicPhotos } from "../middleware/topic";

const initialState = {
  isLoadingTopic: false,
  isLoadingTopics: false,
  isLoadingTopicPhotos: false,
  topics: [],
  topic: null,
  topicPhotos: [],
  page: 1,
  per_page: MAX_PER_PAGE,
  order_by: "position",
  error: null,
};

const { actions, reducer } = createSlice({
  name: "topics",
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
    builder.addCase(fetchListTopics.pending, (state) => {
      state.isLoadingTopics = true;
    });
    builder.addCase(fetchListTopics.fulfilled, (state, { payload }) => {
      state.isLoadingTopics = false;
      // state.topics = state.topics.concat(payload);
      state.topics = payload;
    });
    builder.addCase(fetchListTopics.rejected, (state, action) => {
      state.isLoadingTopics = false;
      state.error = action.error;
    });

    // ===================================================
    // ===================================================
    // ===================================================

    builder.addCase(getTopic.pending, (state) => {
      state.isLoadingTopic = true;
    });
    builder.addCase(getTopic.fulfilled, (state, { payload }) => {
      state.isLoadingTopic = false;
      state.topic = payload;
    });
    builder.addCase(getTopic.rejected, (state, action) => {
      state.isLoadingTopic = false;
      state.error = action.error;
    });

    // ===================================================
    // ===================================================
    // ===================================================

    builder.addCase(getTopicPhotos.pending, (state) => {
      state.isLoadingTopicPhotos = true;
    });
    builder.addCase(getTopicPhotos.fulfilled, (state, { payload }) => {
      state.isLoadingTopicPhotos = false;
      // state.topicPhotos = payload;

      if (payload.refresh) {
        state.topicPhotos = payload.data;
      } else {
        const tmpPhotos = [...state.topicPhotos];
        const newPhotos = tmpPhotos.concat(payload.data);
        state.topicPhotos = uniqBy(newPhotos, "id");
      }
    });
    builder.addCase(getTopicPhotos.rejected, (state, action) => {
      state.isLoadingTopicPhotos = false;
      state.error = action.error;
    });
  },
});

const selectRoot = (state) => state.topics;
export const topicsSelectors = {
  topics: createSelector(selectRoot, (state) => state.topics),
  topic: createSelector(selectRoot, (state) => state.topic),
  topicPhotos: createSelector(selectRoot, (state) => state.topicPhotos),
  isLoadingTopic: createSelector(selectRoot, (state) => state.isLoadingTopic),
  isLoadingTopics: createSelector(selectRoot, (state) => state.isLoadingTopics),
  isLoadingTopicPhotos: createSelector(
    selectRoot,
    (state) => state.isLoadingTopicPhotos
  ),
};

export const topicsActions = {
  ...actions,
  fetchListTopics,
  getTopic,
  getTopicPhotos,
};
export const topicsReducer = reducer;
