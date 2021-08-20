import { createAsyncThunk } from "@reduxjs/toolkit";
import CollectionsService from "../../api/collections";

export const fetchCollections = createAsyncThunk(
  "collections/fetchCollections",
  async ({ page, per_page }) => {
    const response = await CollectionsService.listCollections({
      page,
      per_page,
    });
    return response.data;
  }
);

export const getCollection = createAsyncThunk(
  "collections/getCollection",
  async (id) => {
    const response = await CollectionsService.getCollection(id);
    return response.data;
  }
);

export const getCollectionPhotos = createAsyncThunk(
  "collections/getCollectionPhotos",
  async ({ id, params }) => {
    const response = await CollectionsService.getCollectionPhotos(id, params);
    return response.data;
  }
);

export const getRelatedCollection = createAsyncThunk(
  "collections/getRelatedCollection",
  async (id) => {
    const response = await CollectionsService.getRelatedCollection(id);
    return response.data;
  }
);
