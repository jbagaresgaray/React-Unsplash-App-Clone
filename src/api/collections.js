import API from ".";


const CollectionsService = {
  listCollections(params) {
    return API.get("/collections", {
      params,
    });
  },
  getCollection(id) {
    return API.get(`/collections/${id}`);
  },
  getCollectionPhotos(id, params) {
    return API.get(`/collections/${id}/photos`, {
      params,
    });
  },
  getRelatedCollection(id) {
    return API.get(`/collections/${id}/related`);
  },
};

export default CollectionsService;
