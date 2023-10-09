import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import authReducer from "./auth";
import pageReducer from "./page";
import vaultReducer from "./vault";
import themeReducer from "./theme";
import storage from "redux-persist/lib/storage";
import {
  PersistConfig,
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

export const history = createBrowserHistory();

const combinedReducer = combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  page: pageReducer,
  vault: vaultReducer,
  theme: themeReducer,
});

export type RootState = ReturnType<typeof combinedReducer>;

const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
  whitelist: ["auth", "theme"],
};

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  enhancers: [],
});

export const persistor = persistStore(store);

export default store;
