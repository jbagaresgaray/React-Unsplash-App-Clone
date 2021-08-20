import { createAsyncThunk } from "@reduxjs/toolkit";
import UsersService from "../../api/users";

export const getUserPublicProfile = createAsyncThunk(
  "users/getUserPublicProfile",
  async (username) => {
    const response = await UsersService.getUserPublicProfile(username);
    return response.data;
  }
);

export const getUserPhotos = createAsyncThunk(
  "users/getUserPhotos",
  async ({ username, params }) => {
    const response = await UsersService.getUserPhotos(username, params);
    return response.data;
  }
);

export const getUserLikedPhotos = createAsyncThunk(
  "users/getUserLikedPhotos",
  async ({ username, params }) => {
    const response = await UsersService.getUserLikedPhotos(username, params);
    return response.data;
  }
);

export const getUserCollections = createAsyncThunk(
  "users/getUserCollections",
  async ({ username, params }) => {
    const response = await UsersService.getUserCollections(username, params);
    return response.data;
  }
);
