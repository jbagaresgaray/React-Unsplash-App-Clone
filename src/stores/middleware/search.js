import { createAsyncThunk } from "@reduxjs/toolkit";
import SearchService from "../../api/search";

export const searchUsersQry = createAsyncThunk(
  "search/searchUsers",
  async ({ query, page, per_page }) => {
    const response = await SearchService.searchUsers({
      query,
      page,
      per_page,
    });
    return response.data;
  }
);

export const searchCollectionsQry = createAsyncThunk(
  "search/searchCollections",
  async ({ query, page, per_page }) => {
    const response = await SearchService.searchCollections({
      query,
      page,
      per_page,
    });
    return response.data;
  }
);

export const searchPhotosQry = createAsyncThunk(
  "search/searchPhotos",
  async ({ query, page, per_page }) => {
    const response = await SearchService.searchPhotos({
      query,
      page,
      per_page,
    });
    return response.data;
  }
);
