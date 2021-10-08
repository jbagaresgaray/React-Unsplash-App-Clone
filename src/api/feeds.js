import API from ".";

const FeedService = {
  following(params) {
    return API.get("/feeds/following", {
      params,
    });
  },
};

export default FeedService;
