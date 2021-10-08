import { createAsyncThunk } from "@reduxjs/toolkit";
import FeedService from "../../api/feeds";

export const fetchFollowings = createAsyncThunk(
  "feeds/fetchFollowings",
  async ({ page, per_page }) => {
    const response = await FeedService.following({
      page,
      per_page,
    });
    return response.data;
  }
);