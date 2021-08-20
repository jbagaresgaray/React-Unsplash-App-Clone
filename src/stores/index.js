import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./reducer";

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefault) {
    const defaultMiddlewares = getDefault({
      serializableCheck: {
        ignoredActions: [
          "persist/REGISTER",
          "persist/REHYDRATE",
          "persist/PERSIST",
        ],
      },
    }).concat(thunk);
    return defaultMiddlewares;
  },
});

const persistor = persistStore(store);
export { store, persistor };
