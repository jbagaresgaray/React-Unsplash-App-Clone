import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { topicsReducer } from "./slices/topicsSlice";
import { photosReducer } from "./slices/photosSlice";
import { collectionsReducer } from "./slices/collectionsSlice";
import { usersReducer } from "./slices/usersSlice";
import { searchReducer } from "./slices/searchSlice";
import { feedsReducer } from "./slices/feedsSlice";

const rootReducer = combineReducers({
  topics: topicsReducer,
  photos: photosReducer,
  collections: collectionsReducer,
  users: usersReducer,
  search: searchReducer,
  feeds: feedsReducer,
  routing: routerReducer,
});

export default rootReducer;
