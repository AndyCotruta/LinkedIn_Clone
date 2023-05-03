import { configureStore, combineReducers } from "@reduxjs/toolkit";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import profilesReducer from "../reducers/profilesReducer";
import experienceReducer from "../reducers/experienceReducer";
import searchReducer from "../reducers/searchReducer";
import postsReducer from "../reducers/postsReducer";

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const bigReducer = combineReducers({
  profiles: profilesReducer,
  experience: experienceReducer,
  search: searchReducer,
  posts: postsReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
