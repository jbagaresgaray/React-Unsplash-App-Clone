import axios from "axios";
import { REACT_API_URL, REACT_UNSPLASH_ACCESS_KEY } from "../constants";

const baseURL = REACT_API_URL || "https://api.unsplash.com/";
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `Client-ID ${REACT_UNSPLASH_ACCESS_KEY}`,
  "X-Ratelimit-Limit": 1000,
  "X-Ratelimit-Remaining": 999,
};

const API = axios.create({
  baseURL,
  timeout: 30000,
  headers,
  transformResponse: (data) => {
    try {
      return JSON.parse(data);
    } catch (error) {
      throw Error(
        `[requestClient] Error parsing response JSON data - ${JSON.stringify(
          error
        )}`
      );
    }
  },
});

API.interceptors.request.use(
  async (config) => {
    config.headers = headers;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default API;
