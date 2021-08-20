import { createAsyncThunk } from "@reduxjs/toolkit";
import TopicsService from "../../api/topics";

export const fetchListTopics = createAsyncThunk(
  "topics/fetchTopics",
  async ({ ids, page, per_page, order_by }) => {
    const response = await TopicsService.listTopics({
      ids,
      page,
      per_page,
      order_by,
    });
    return response.data;
  }
);

export const getTopic = createAsyncThunk(
  "topics/getTopic",
  async (id_or_slug) => {
    const response = await TopicsService.getTopic(id_or_slug);
    return response.data;
  }
);

export const getTopicPhotos = createAsyncThunk(
  "topics/getTopicPhotos",
  async ({ id_or_slug, params }) => {
    const response = await TopicsService.getTopicPhotos(id_or_slug, params);
    return response.data;
  }
);
