import API from ".";

const TopicsService = {
  listTopics(params) {
    return API.get("/topics", {
      params,
    });
  },
  getTopic(id_or_slug) {
    return API.get(`/topics/${id_or_slug}`);
  },
  getTopicPhotos(id_or_slug, params) {
    return API.get(`/topics/${id_or_slug}/photos`, {
      params,
    });
  },
};

export default TopicsService;
