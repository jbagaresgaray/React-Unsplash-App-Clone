import API from ".";

const SearchService = {
  searchPhotos(params) {
    return API.get("/search/photos", {
      params,
    });
  },
  searchCollections(params) {
    return API.get(`/search/collections`, {
      params,
    });
  },
  searchUsers(params) {
    return API.get(`/search/users`, { params });
  },
};

export default SearchService;
