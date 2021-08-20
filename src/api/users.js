import API from ".";

const UsersService = {
  getUserPublicProfile(username) {
    return API.get(`/users/${username}`);
  },
  getUserPortfolio(username) {
    return API.get(`/users/${username}/portfolio`);
  },
  getUserPhotos(username, params) {
    return API.get(`/users/${username}/photos`, {
      params,
    });
  },
  getUserLikedPhotos(username, params) {
    return API.get(`/users/${username}/likes`, {
      params,
    });
  },
  getUserCollections(username, params) {
    return API.get(`/users/${username}/collections`, {
      params,
    });
  },
};

export default UsersService;
