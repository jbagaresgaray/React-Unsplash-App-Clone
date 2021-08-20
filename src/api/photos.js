import API from ".";

const PhotosService = {
  listPhotos(params) {
    return API.get("/photos", {
      params,
    });
  },
  getPhoto(id) {
    return API.get(`/photos/${id}`);
  },
  trackDownloadPhoto(id) {
    return API.get(`/photos/${id}/download`);
  },
  likePhoto(id) {
    return API.post(`/photos/${id}/like`);
  },
  unLikePhoto(id) {
    return API.delete(`/photos/${id}/like`);
  },
};

export default PhotosService;
