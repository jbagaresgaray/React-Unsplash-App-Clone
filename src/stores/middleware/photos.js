import { createAsyncThunk } from "@reduxjs/toolkit";
import PhotosService from "../../api/photos";

export const fetchListPhotos = createAsyncThunk(
  "photos/fetchPhotos",
  async ({ page, per_page, order_by, refresh }) => {
    const response = await PhotosService.listPhotos({
      page,
      per_page,
      order_by,
    });
    return {
      data: response.data,
      refresh,
    };
  }
);

export const getPhoto = createAsyncThunk("photos/getPhoto", async (id) => {
  const response = await PhotosService.getPhoto(id);
  return response.data;
});

export const getRandomPhoto = createAsyncThunk(
  "photos/getRandomPhoto",
  async () => {
    const response = await PhotosService.getRandomPhoto();
    return response.data;
  }
);
