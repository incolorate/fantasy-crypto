import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  buyCrypto,
  sellCrypto,
  userSliceReducer,
  updateUsd,
} from "./slices/userSlice";
import { coinsApi } from "./apis/fetchCoinData";
const store = configureStore({
  reducer: {
    user: userSliceReducer,
    [coinsApi.reducerPath]: coinsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinsApi.middleware),
});

setupListeners(store.dispatch);

export { store, sellCrypto, buyCrypto, updateUsd };
